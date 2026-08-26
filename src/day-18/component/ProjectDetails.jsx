import { useParams, useNavigate, Link } from 'react-router-dom'
import { projects } from '../data/projects';


function ProjectDetails() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const { id } = useParams();

    const project = projects.find(p => p.id === Number(id));
    if (!project) return <p>No Project Found <Link to={'/projects'}>Projects</Link></p>

    return (
        <>

            <h2>{project.title}</h2>
            {project.isFeatured && <span>⭐ Featured</span>}
            <p>{project.description}</p>
            <p>Tech: {project.tech}</p>
            <a href={project.link}>View Project</a> <br /> <br />

            <button onClick={handleClick}>Back to Projects</button>
        </>
    )
}

export default ProjectDetails;