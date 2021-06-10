import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  const { isAuthenticated, toggleAuth } = authContext;
  const { dark, light, isLightTheme } = themeContext;
  const theme = isLightTheme ? light : dark;

  console.log("theme??", theme);

  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
