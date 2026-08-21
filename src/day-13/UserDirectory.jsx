import { useState, useEffect } from "react";
import UserList from "./UserList";

function UserDirectory() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('')

    useEffect(() => {
        async function fetchUsers() {
            try {
                setIsLoading(true);

                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) throw new Error('Failed to fetch users');

                const data = await response.json();

                setUsers(data);

            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, [])

    
    const filteredUsers = users.filter(u => u.name.toLowerCase().includes(query.trim().toLowerCase()))

    useEffect(() => {
        document.title = `User Directory — ${filteredUsers.length} users`;
    }, [filteredUsers.length])


    if(isLoading) return <p>Page is Loading</p>
    if(error) return <p style={{ color: 'red' }}>Error: {error}</p>

    // console.log(users);

    return (
        <>
            <h2>User Directory</h2>

            <h4>Enter user name: </h4>
            <div>
                <input type="text" placeholder="search..." value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

            <UserList users = {filteredUsers} />
        </>
    )
}

export default UserDirectory;