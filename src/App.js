import React, { useState, useEffect, useContext } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import { BookContext } from "./contexts/BookContext";
import { Router, Route, Link } from "react-router-dom";

function App() {
  const { books } = useContext(BookContext);

  return (
    <div>
      <Navbar />
      <BookList />
      <ThemeToggle />
      <AddBookForm />
    </div>
  );
}

export default App;
