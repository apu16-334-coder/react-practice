import { useState, useEffect } from "react";

function ProfilePage({ currentUser }) {

    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                setIsLoading(true);

                console.log(currentUser)

                const response = await fetch(`https://api.github.com/users/${currentUser}`);

                if (!response.ok) throw new Error("Fetching user details failed");

                const data = await response.json();

                setUserData(data)

                console.log(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }

        }

        fetchUserDetails();

    }, [currentUser])

    if (!currentUser) return null;

    if(isLoading) return <p>Page is Loading</p>
    if(error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return (
        <>
            <h2>Profile Page</h2>
            <img src={userData.avatar_url} style={{width: '200px', height: 'auto'}} />
            <div style={{display: 'inline-block', marginLeft: '50px'}}>
                <h3>Name: {userData.name ? userData.name : userData.login}</h3>
                <p>BIO: {userData.bio}</p>
                <h4>Followers: {userData.followers}</h4>
                <h4>Public_Repos: {userData.public_repos}</h4>
            </div>

        </>
    )
}

export default ProfilePage;