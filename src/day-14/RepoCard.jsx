function RepoCard({ name, description, starCount, link }) {
    return (
        <>
            <li>
                <h4>Repo Name: {name}</h4>
                <p>Description: {description}</p>
                <p>Star: {starCount}</p>
                <a href={link}>GitHub Link</a>
            </li>
        </>
    )
}

export default RepoCard;