import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./Component/Hero";
import App from "./Component/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero />
    <App />
  </React.StrictMode>
);