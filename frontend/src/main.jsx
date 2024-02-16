import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { apiSlice } from "./api/apiSlice.js";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/ApiProvider.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ApiProvider>
  </React.StrictMode>
);
