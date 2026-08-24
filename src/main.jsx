import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../assets/css/style.css";

const savedTheme = localStorage.getItem("govassist-theme");
if (savedTheme === "dark" || savedTheme === "light") {
  document.documentElement.dataset.theme = savedTheme;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
