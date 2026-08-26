import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? 'blue' : 'black'
                    })}
                >
                    Home
                </NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </>
    )
}

export default Navbar;