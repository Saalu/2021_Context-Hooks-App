import React, { useState } from "react";

function AddBookForm() {
  const [book, setBook] = useState({
    name: "",
    author: "",
  });
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input type="text" placeholder="book name" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="author's name" />
        </div>
        <button>Add </button>
      </form>
    </div>
  );
}

export default AddBookForm;
