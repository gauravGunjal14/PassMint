import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./Component/Hero";
import App from "./Component/App";
import Features from "./Component/Features";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="home">
      <Hero />
      <App />
    </div>
    <Features />
  </React.StrictMode>
);