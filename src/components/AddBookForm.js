import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";

function AddBookForm(props) {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author };
    addBook(book);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="book name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="author's name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button>Add </button>
      </form>
    </div>
  );
}

export default AddBookForm;
