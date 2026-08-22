import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

function SearchPage({onChangePage, onChangeUser}) {
    const [searchData, setSearchData] = useState({
        query: '',
        isQueryEmpty: null
    });

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);

    function handleChange(e) {
        setSearchData(prev => ({ ...prev, query: e.target.value }))
        setIsEmpty(false)
    }

    async function fetchGitHubUsers() {
        try {
            setIsLoading(true);

            const response = await fetch(`https://api.github.com/search/users?q=${searchData.query}`);

            if (!response.ok) throw new Error("Fetching user failed");

            const data = await response.json();

            setUsers(data.items);

            setIsEmpty(data.items.length === 0)

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    function handleSearch(e) {
        e.preventDefault()

        const flag = searchData.query.trim() === '' ? true : false
        setSearchData(prev => ({ ...prev, isQueryEmpty: flag }))
        if (flag) return

        fetchGitHubUsers();
    }

    function handleProfileView(username) {
        onChangePage('profilePage');
        onChangeUser(username);
    }

    return (
        <>
            <SearchBar {...searchData} onSearch={handleSearch} onHandle={handleChange} />

            <h2>User List</h2>

            {isEmpty
                ? <p>No users found for {searchData.query}</p>
                : <UserList onProfileView={handleProfileView} query={searchData.query} users={users} isLoading={isLoading} error={error} />
            }
        </>
    )
}

export default SearchPage;