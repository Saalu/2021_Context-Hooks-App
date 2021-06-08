import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const data = useContext(ThemeContext);
  const { dark, light, isLightTheme } = data;
  const theme = isLightTheme ? light : dark;

  return (
    <div>
      <nav>
        <h1>Context App</h1>
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
