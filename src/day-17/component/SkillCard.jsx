

function SkillCard({ skills }) {
    if (skills.length === 0) return <p>No skills listed yet.</p>
    return (
        <>
            <h2>I Know {skills.length} Technologies:</h2>
            {/* Skills List */}
            <ol>
                {skills.map(skill => <li  key={skill} >{skill}</li>)}
            </ol>
        </>
    )
}

export default SkillCard;