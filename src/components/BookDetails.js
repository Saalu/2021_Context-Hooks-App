import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function BookDetails({ book }) {
  const { removeBook } = useContext(BookContext);

  return (
    <li>
      <span style={{ fontWeight: "bold" }}>{book.title}</span> - {book.author}
      <span>
        <i className="fas fa-check"></i>
        <i onClick={() => removeBook(book.id)} className="fas fa-trash"></i>
      </span>
    </li>
  );
}

export default BookDetails;
