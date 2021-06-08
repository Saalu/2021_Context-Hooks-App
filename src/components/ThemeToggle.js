import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeToggle() {
  const data = useContext(ThemeContext);
  const { toggleTheme } = data;
  return (
    <div>
      <button onClick={toggleTheme}>Toggle the theme</button>
    </div>
  );
}

export default ThemeToggle;
