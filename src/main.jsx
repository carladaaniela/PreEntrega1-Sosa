import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomProvider } from "@CartContext";
import ItemListContainer from "./components/ItemListContainer";
import "./scss/styles.scss";
import Layout from "./components/Layout";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ItemListContainer />
          </>
        ),
      },
      {
        path: "/category/:categoryId",
        element: (
          <>
            <ItemListContainer />
          </>
        ),
      },
      {
        path: "/item/:itemId",
        element: (
          <>
            <ItemDetailContainer />
          </>
        ),
      },
      {
        path: "/cart",
        element: (
          <>
            <Cart />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
