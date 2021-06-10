import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { dark, light, isLightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books, removeBook } = useContext(BookContext);

  return books.length ? (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <BookDetails key={book.id} book={book} removeBook={removeBook} />
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      No books to read. Hello you've got some free time
    </div>
  );
};

export default BookList;
