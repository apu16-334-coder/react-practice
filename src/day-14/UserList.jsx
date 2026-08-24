import UserCard from "./UserCard";

function UserList({ users, onProfileView }) {

    return (
        <>
            <h2>User List</h2>
            <ol>
                {users.map(u => (
                    <UserCard key={u.id} onProfileView={onProfileView} avatarUrl={u.avatar_url} username={u.login} />
                ))}
            </ol>
        </>
    )
}

export default UserList;