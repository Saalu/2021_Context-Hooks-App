import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { id: 1, title: "the courage to say no", author: "Kwesi Koranteng" },
    { id: 2, title: "julia's dance", author: "Perky Oppong" },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { id: uuid(), title, author }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
