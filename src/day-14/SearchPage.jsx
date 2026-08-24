import { useEffect, useState, useRef } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

function SearchPage({ searchData, onChangeSearchData, users, onChangeUsers, onChangePage, onChangeCurrentUser }) {
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const abortControllerRef = useRef(null);

    function handleChange(e) {
        onChangeSearchData(prev => ({ ...prev, query: e.target.value }))
        setIsEmpty(false)
    }

    async function fetchGitHubUsers() {
        // Cancel any previous in-flight request
        if (abortControllerRef.current) abortControllerRef.current.abort();

        // Create fresh controller for this request
        abortControllerRef.current = new AbortController();

        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(
                `https://api.github.com/search/users?q=${searchData.query}`,
                { signal: abortControllerRef.current.signal } // attach signal
            )

            if (!response.ok) throw new Error("Fetching user failed");

            const data = await response.json();

            onChangeUsers(data.items);

            setIsEmpty(data.items.length === 0)

            console.log(`Query "${searchData.query}" completed`);

        } catch (err) {
            if (err.name === 'AbortError') return // ignore — expected
            setError(err.message);
        } finally {
            // Only set loading false if this is the current request
            if (abortControllerRef.current?.signal.aborted === false) {
                setIsLoading(false);
            }
        }
    }

    function handleSearch(e) {
        e.preventDefault()

        const flag = searchData.query.trim() === '';
        onChangeSearchData(prev => ({ ...prev, isQueryEmpty: flag }))
        if (flag) return

        fetchGitHubUsers();
    }

    function handleProfileView(username) {
        onChangePage('profilePage');
        onChangeCurrentUser(username);
    }

    useEffect(() => {
        document.title = `GitHub Search`;
    }, [])

    return (
        <>
            <SearchBar {...searchData} onSearch={handleSearch} onQueryChange={handleChange} />

            <h2>User List</h2>

            {isEmpty
                ? <p>No users found for {searchData.query}</p>
                : <UserList onProfileView={handleProfileView} query={searchData.query} users={users} isLoading={isLoading} error={error} />
            }
        </>
    )
}

export default SearchPage;