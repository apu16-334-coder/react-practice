import { useEffect, useState, useRef } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

function SearchPage({ query, onQueryChange, users, onChangeUsers, onChangePage, onChangeCurrentUser }) {

    const [status, setStatus] = useState('idle')
    // idle | loading | empty | success
    const [error, setError] = useState(null);

    function handleChange(e) {
        onQueryChange(e.target.value);
    }

    useEffect(() => {
        // if query is empty
        if (!query.trim()) {
            // reset all states when query is cleared
            setStatus('idle');
            setError(null);
            onChangeUsers([]);
            return;
        }

        // Create fresh controller for this request
        const controller = new AbortController();

        // set time out for debounce
        const timer = setTimeout(async () => {
            try {
                setStatus('loading');
                setError(null);

                const response = await fetch(
                    `https://api.github.com/search/users?q=${query}`,
                    { signal: controller.signal } // attach signal
                )

                if (!response.ok) throw new Error("Fetching user failed");

                const data = await response.json();

                onChangeUsers(data.items);

                setStatus(data.items.length === 0 ? 'empty' : 'success');

            } catch (err) {
                if (err.name === 'AbortError') return // ignore — expected
                setError(err.message);
            }
        }, 500)

        return () => {
            clearTimeout(timer)    // cancel debounce timer
            controller.abort()     // cancel in-flight fetch
        }


    }, [query])

    function handleProfileView(username) {
        onChangePage('profilePage');
        onChangeCurrentUser(username);
    }

    useEffect(() => {
        document.title = `GitHub Search`;
    }, [])

    return (
        <>
            <SearchBar query={query} onQueryChange={handleChange} />

            {status === 'idle' && <p>Enter a username to search</p>}
            {status === 'loading' && <p>Page is Loading</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {status === 'empty' && <p>No users found for "{query}"</p>}
            {status === 'success' && <UserList onProfileView={handleProfileView} users={users} />}
        </>
    )
}

export default SearchPage;