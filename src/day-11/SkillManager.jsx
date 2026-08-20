import { useState } from "react"

function SkillManager() {
    const [skills, setSkills] = useState([
        { id: 1, name: 'Backend developer', level: 'advanced' },
        { id: 2, name: 'Frontend developer', level: 'intermediate' }
    ])

    function handleDelete(id) {

    }

    return (
        <>
            <h3>Skills Lists</h3>
            <ol>
                {skills.map(skill => (

                    <li key={skill.id}>
                        Name: {skill.name} Level: {skill.level}
                        <button onClick={() => handleDelete(skill.id)}>Delete</button>
                    </li>

                ))}
            </ol>
        </>
    )
}

export default SkillManager;