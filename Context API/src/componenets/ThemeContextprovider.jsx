import { Children, useState } from "react"
import  ThemeContext  from "../context/ThemeContext.js"

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(p => (p === "light" ? "dark" : "light"))
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeContextProvider;