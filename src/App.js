import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
