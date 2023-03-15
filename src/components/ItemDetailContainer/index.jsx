import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import ItemList from "../ItemList";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const mockItems = [
    {
      id: 1,
      title: "Producto 1",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
    },

    {
      id: 2,
      title: "Producto 2",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
    },

    {
      id: 3,
      title: "Producto 3",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
    },

    {
      id: 4,
      title: "Producto 4",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
    },
  ];

  const mockPromise = () => {
    return new Promise((resolve) => {
      resolve(mockItems);
    });
  };

  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      mockPromise()
        .then((response) => {
          setItems(response);
        })
        .finally(() => {
          setLoader(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {loader ? (
        <p>Cargando...</p>
      ) : items.length > 0 ? (
        <ItemDetail items={items} />
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
