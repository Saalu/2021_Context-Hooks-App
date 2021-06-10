import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./index.css";

ReactDOM.render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
