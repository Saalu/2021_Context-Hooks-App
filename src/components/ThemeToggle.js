import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeToggle() {
  const themeContext = useContext(ThemeContext);
  const { toggleTheme, isLightTheme } = themeContext;

  return (
    <div className="btn">
      <button
        onClick={toggleTheme}
        className={isLightTheme ? "dark-bg" : "light-bg"}
      >
        {isLightTheme ? "Toggle Dark mode" : "Toggle Light mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
