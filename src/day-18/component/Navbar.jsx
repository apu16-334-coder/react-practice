import { NavLink } from 'react-router-dom'

function toggle({ isActive }) {
    return { color: isActive ? 'red' : 'black' }
}

function Navbar() {


    return (
        <>
            <nav>
                <NavLink to="/" style={toggle}> Home </NavLink>
                <NavLink to="/projects" style={toggle}>Projects</NavLink>
                <NavLink to="/skills" style={toggle}>Skills</NavLink>
                <NavLink to="/contact" style={toggle}>Contact</NavLink>
            </nav>
        </>
    )
}

export default Navbar;