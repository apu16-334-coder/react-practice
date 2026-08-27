import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { useContext } from "react";
import { ThemeContext } from "../../day-19/context/ThemeContext";

const styles = {
    light: { backgroundColor: '#fff', color: '#000' },
    dark: { backgroundColor: '#222', color: '#fff' }
}

function Layout() {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={styles[theme]}>
            <Navbar />
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout;