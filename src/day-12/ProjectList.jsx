import ProjectCard from "./ProjectCard";

function ProjectList({ filteredProject }) {
    return (
        <>
            <h4>Project List</h4>

            {filteredProject.length > 0
                ? <ol>
                    {filteredProject.map(({ id, ...rest }) => <ProjectCard key={id} {...rest} />)}
                </ol>
                : <p>No projects found</p>
            }

        </>
    )
}

export default ProjectList;