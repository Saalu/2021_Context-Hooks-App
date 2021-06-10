import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function BookList() {
  const themeContext = useContext(ThemeContext);
  const { dark, light, isLightTheme } = themeContext;
  const theme = isLightTheme ? light : dark;

  const [books, setBooks] = useState([
    { id: 1, title: "the courage to say no" },
    { id: 2, title: "the merchanct of vernice" },
    { id: 3, title: "julia's dance" },
  ]);
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;
