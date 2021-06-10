import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { dark, light, isLightTheme } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  console.log(books);
  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Reading List App</h1>
        <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <p style={{ color: "orangered", marginTop: "1rem" }}>
          Currently you have {books.length} books to get through...
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
