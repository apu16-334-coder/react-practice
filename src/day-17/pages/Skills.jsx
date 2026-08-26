import SkillCard from "../component/SkillCard";

const skills = ['Node.js', 'Express.js', 'MongoDB', 'MySQL'];

function Skills() {
    return (
        <>
            <SkillCard skills={skills} />
        </>
    )
}

export default Skills;