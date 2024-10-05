import { createContext } from "react"
import { useState } from "react";



export const ThemeContext = createContext();

function ThemeContentProvider({ children }) {
    const [theme, setTheme] = useState('light')
    const ToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === `light` ? `dark` : `light`))
    }
    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};
export default ThemeContentProvider