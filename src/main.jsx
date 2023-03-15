import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ItemListContainer />
      </>
    ),
  },
  {
    path: "/category/:id",
    element: (
      <>
        <Navbar />
        <ItemListContainer />
      </>
    ),
  },
  {
    path: "/item/:id",
    element: (
      <>
        <Navbar />
        <ItemDetailContainer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
