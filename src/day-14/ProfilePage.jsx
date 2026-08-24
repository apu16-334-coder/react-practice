import { useState, useEffect } from "react";

import RepoCard from "./RepoCard";

function ProfilePage({ currentUser, onChangePage }) {

    const [userData, setUserData] = useState({});
    const [repoData, setRepoData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUserDetails = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Better — fetch both simultaneously with Promise.all
                const [response1, response2] = await Promise.all([
                    fetch(`https://api.github.com/users/${currentUser}`,
                        { signal: controller.signal }
                    ),
                    fetch(`https://api.github.com/users/${currentUser}/repos?sort=updated&per_page=5`,
                        { signal: controller.signal }
                    )
                ])

                if (!response1.ok) throw new Error("Fetching user details failed");

                if (!response2.ok) throw new Error("Fetching repos details failed");

                const data = await response1.json();
                const repos = await response2.json();

                setUserData(data);
                setRepoData(repos);

            } catch (err) {
                if (err.name === 'AbortError') return // ignore — expected
                setError(err.message);
            } finally {
                if (!controller.signal.aborted) setIsLoading(false);
            }

        }
        fetchUserDetails();

        return () => controller.abort(); // aborts BOTH fetches simultaneously

    }, [currentUser])

    useEffect(() => {
        document.title = `${currentUser} — GitHub`;
    }, [currentUser])

    if (isLoading) return <p>Page is Loading</p>
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return (
        <>
            <h2>Profile Page</h2>
            <img src={userData.avatar_url} style={{ width: '200px', height: 'auto' }} />
            <div style={{ display: 'inline-block', marginLeft: '50px' }}>
                <h3>Name: {userData.name ? userData.name : userData.login}</h3>
                <p>BIO: {userData.bio}</p>
                <h4>Followers: {userData.followers}</h4>
                <h4>Public_Repos: {userData.public_repos}</h4>

                {/* name, description, star count, link to GitHub */}
                {/* { id, name, description, stargazers_count, html_url } */}

                <ol>
                    {repoData.map(r => (
                        <RepoCard key={r.id} name={r.name} description={r.description} starCount={r.stargazers_count} link={r.html_url} />
                    ))}
                </ol>

                <button onClick={() => onChangePage('searchPage')} >Back to Search</button>
            </div>


        </>
    )
}

export default ProfilePage;