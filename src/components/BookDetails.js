import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import EditBookForm from "./EditBookForm";

function BookDetails({ book }) {
  const { updateBook, removeBook } = useContext(BookContext);

  const getUpdate = () => {
    updateBook(book);
  };
  return (
    <li>
      <span style={{ fontWeight: "bold" }}>{book.title}</span> - {book.author}
      <span>
        <i onClick={getUpdate} className="fas fa-check"></i>
        <i onClick={() => removeBook(book.id)} className="fas fa-trash"></i>
      </span>
    </li>
  );
}

export default BookDetails;
