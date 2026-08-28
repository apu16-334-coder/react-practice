import { createContext, useState } from "react";
import useLocalStorage from "../../day-20/hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme','light');

    function toggleTheme() {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}