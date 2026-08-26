import ProjectCard from "../component/ProjectCard";

const projects = [
    {
        id: 1,
        title: 'Team Collaboration Issue Tracker API',
        description: 'A Jira-style backend with RBAC and JWT auth',
        tech: 'Node.js, Express.js, MongoDB, Mongoose, JWT',
        link: 'https://github.com/apu16-334-coder/Team-Collaboration-Issue-Tracker-REST-API-Node.js-Express-MongoDB',
        isFeatured: true
    },
    {
        id: 2,
        title: 'Fantastic Gardens API',
        description: 'A REST API for garden management with MySQL',
        tech: 'Node.js, Express.js, MySQL, Sequelize, JWT',
        link: 'https://github.com/apu16-334-coder/Fantastic-Garden-REST-API-Node.js-Express-MySQL',
        isFeatured: true
    },
    {
        id: 3,
        title: 'Task Manager API',
        description: 'A REST API for managing task RBAC and JWT auth ',
        tech: 'Node.js, Express.js, MongoDB, Mongoose, JWT',
        link: 'https://github.com/apu16-334-coder/Task-Manager-REST-API-Node.js-Express-MongoDB',
        isFeatured: false
    }
]

function Projects() {
    return (
        <>
            {projects.map(({ id, ...rest }) => <ProjectCard key={id} {...rest} />)}
        </>
    )
}

export default Projects;