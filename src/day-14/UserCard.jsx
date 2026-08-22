function UserCard({avatarUrl, username, onProfileView}) {
    return (
        <>
            <li>
                <img src={avatarUrl} style={{ width: 'auto%', height: '40px' }} /> 
                <span style={{marginLeft: '20px', marginRight: '20px'}}>{username}</span>
                <button onClick={() => onProfileView(username)}>View Profile</button>
            </li>
        </>
    )
}

export default UserCard;