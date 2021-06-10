import React, { createContext, useEffect, useState } from "react";
import uuid from "react-uuid";
import api from "../api";
export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([]);

  const addBook = async (input) => {
    const res = await api.post("/books", input);
    const payload = res.data;
    setBooks([...books, { id: uuid(), payload }]);
  };

  const fetchBook = async () => {
    const res = await api.get("/books");
    return res.data;
  };

  const removeBook = async (id) => {
    await api.delete(`/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = async (clickBook) => {
    const res = await api.put(`/books/${clickBook.id}`, clickBook);

    console.log("tap", clickBook);

    // setBooks(
    //   books.map((book) => (book.id === res.data.id ? res.data : clickBook))
    // );
  };

  useEffect(() => {
    const getBooks = async () => {
      const allBooks = await fetchBook();
      if (allBooks) setBooks(allBooks);
    };
    getBooks();
  }, []);
  return (
    <BookContext.Provider value={{ books, addBook, updateBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
