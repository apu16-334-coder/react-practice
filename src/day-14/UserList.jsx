import UserCard from "./UserCard";

function UserList({users, isLoading, error}) {

    if(isLoading) return <p>Page is Loading</p>
    if(error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return (
        <>
            <ol>
                {users.map(u => (
                    <UserCard  key = {u.id} avatarUrl= {u.avatar_url} username = {u.login} />
                ))}
            </ol>
        </>
    )
}

export default UserList;