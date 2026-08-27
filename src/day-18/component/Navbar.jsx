import { NavLink } from 'react-router-dom'

import { useContext } from 'react';
import { ThemeContext } from '../../day-19/context/ThemeContext';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    function setLinkColor({ isActive }) {
        if (isActive) return { color: 'red' }

        return { color: theme === 'light' ? 'black' : 'white'}
    }

    return (
        <>
            <nav>
                <NavLink to="/" style={setLinkColor}> Home </NavLink>
                <NavLink to="/projects" style={setLinkColor}>Projects</NavLink>
                <NavLink to="/skills" style={setLinkColor}>Skills</NavLink>
                <NavLink to="/contact" style={setLinkColor}>Contact</NavLink>
            </nav>

            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </button>
        </>
    )
}

export default Navbar;