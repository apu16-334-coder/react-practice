function ProjectCard({title, description, tech, link = '#', isFeatured}) {
    return (
        <>
            
            <h2>{title}</h2>
            {isFeatured && <span>⭐ Featured</span>}
            <p>{description}</p>
            <p>Tech: {tech}</p>
            <a href={link}>View Project</a>
        </>
    )
}

export default ProjectCard;