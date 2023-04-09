import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { CustomProvider } from "./context";
import "./index.css";

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
