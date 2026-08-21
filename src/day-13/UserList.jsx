function UserList({users}) {
    return (
        <>
            <ol>
                {users.map(u => <li key={u.id}>Name: {u.name}. Email: {u.email}. City: {u.address.city}.</li>)}
            </ol>
            
        </>
    )
}

export default UserList;