import { useState } from "react"

function SkillManager() {
    const [skills, setSkills] = useState([
        { id: 1, name: 'Backend developer', level: 'Advanced' },
        { id: 2, name: 'Frontend developer', level: 'Intermediate' }
    ])

    const [formData, setFormData] = useState({ name: '', level: '' })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSkills(prev => [...prev, { ...formData, id: Date.now() }]);
        setFormData({ name: '', level: '' });
    }

    function handleDelete(id) {
        setSkills(prev => prev.filter(skill => skill.id !==id));
    }

    function handleToggle (id) {

        setSkills(prev => prev.map(skill => {
            if(skill.id === id) {
                if(skill.level === 'Beginner') {
                    return {...skill, level: 'Intermediate'}
                }

                if(skill.level === 'Intermediate') {
                    return {...skill, level: 'Advanced'}
                }

                if(skill.level === 'Advanced') {
                    return {...skill, level: 'Beginner'}
                }
            }else {
                return skill;
            }
        }))
    }

    return (
        <>
            <h3>Skills Lists</h3>
            <ol>
                {skills.map(skill => (

                    <li key={skill.id}>
                        <span style={{ marginRight: '20px' }}>Name: {skill.name}</span>
                        <span style={{ marginRight: '20px', cursor:'pointer' }} onClick={() => handleToggle(skill.id)}>Level: {skill.level}</span>
                        <button onClick={() => handleDelete(skill.id)}>Delete</button>
                    </li>

                ))}
            </ol>

            <form onSubmit={handleSubmit} >
                <div>
                    <label>Enter Skill Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Choose Skill Level:</label>
                    <select name="level" value={formData.level} onChange={handleChange} >
                        <option value="">select level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div style={{ marginTop: '10px' }}><button type="submit">Add</button></div>
            </form>
        </>
    )
}

export default SkillManager;