import { useContext } from "react"
import ThemeContext from "./context/ThemeContext"
import ThemeContextProvider from "./componenets/ThemeContextprovider.jsx";
import Navbar from "./componenets/Navbar.jsx";

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          height: "100vh",
        }}
      >
        <Navbar/>
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  )
}

export default App
