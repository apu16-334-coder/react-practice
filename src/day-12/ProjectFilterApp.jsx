import { useState } from "react"
import FilterBar from "./FilterBar"
import ProjectList from "./ProjectList"

const projects = [
    { id: 1, title: 'Issue Tracker API', tech: 'MongoDB', level: 'intermediate' },
    { id: 2, title: 'Fantastic Gardens API', tech: 'MySQL', level: 'intermediate' },
    { id: 3, title: 'Todo App', tech: 'React', level: 'beginner' },
    { id: 4, title: 'Auth System', tech: 'Node.js', level: 'beginner' },
    { id: 5, title: 'Real Time Chat', tech: 'Socket.io', level: 'advanced' }
]

function ProjectFilterApp() {
    const [filterBarData, setFilterBarData] = useState({ query: '', level: 'all' })

    const filteredProject = projects.filter(p => {
        const matchesQuery = p.title.toLocaleLowerCase().includes(filterBarData.query.trim().toLowerCase());

        const matchesLevel = filterBarData.level === 'all' || p.level === filterBarData.level;

        return matchesQuery && matchesLevel
    })

    function handleSearch(e) {
        setFilterBarData(prev => ({ ...prev, query: e.target.value }))
    }

    function handleLevelChange(e) {
        setFilterBarData(prev => ({ ...prev, level: e.target.value }))
    }

    return (
        <>
            <h1>Project Filter App</h1>

            <FilterBar {...filterBarData} onSearch={handleSearch} onLevelChange={handleLevelChange} />

            <ProjectList filteredProject = {filteredProject} />

        </>
    )
}

export default ProjectFilterApp