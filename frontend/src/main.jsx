import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import { store } from "./store/app.js"
// import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </RouterProvider>
  </React.StrictMode>
);
