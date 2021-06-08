import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function BookList() {
  const data = useContext(ThemeContext);
  const { dark, light, isLightTheme } = data;
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>the courage to say no</li>
        <li style={{ background: theme.ui }}>the merchanct of vernice</li>
        <li style={{ background: theme.ui }}>julia's dance</li>
      </ul>
    </div>
  );
}

export default BookList;
