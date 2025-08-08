// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { style } from "./styles"; // styles 폴더의 index.ts에서 import
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <style.ThemeProvider theme={style.theme}>
      <style.GlobalStyles />
      <App />
    </style.ThemeProvider>
  </React.StrictMode>
);
