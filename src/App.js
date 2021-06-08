import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div>
      <Navbar />
      <BookList />
      <ThemeToggle />
    </div>
  );
}

export default App;
