import { Link } from 'react-router-dom'
import { projects } from '../data/projects';

function Projects() {
    return (
        <>
            {projects.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`/projects/${id}`}>{title}</Link>
                </li>
            ))}
        </>
    )
}

export default Projects;