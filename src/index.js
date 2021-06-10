import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./index.css";

ReactDOM.render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
