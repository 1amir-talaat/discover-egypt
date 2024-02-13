import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
);
