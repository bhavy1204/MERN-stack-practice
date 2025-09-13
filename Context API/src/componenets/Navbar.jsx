import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        background: theme === "light" ? "#eee" : "#333",
        padding: "1rem",
      }}
    >
      <h2>Navbar ({theme} mode)</h2>
    </nav>
  );
}

export default Navbar;
