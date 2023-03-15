import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const mockItems = [
    {
      id: 1,
      title: "Producto 1",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
      category: "remeras",
    },

    {
      id: 2,
      title: "Producto 2",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
      category: "pantalones",
    },

    {
      id: 3,
      title: "Producto 3",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
      category: "camperas",
    },

    {
      id: 4,
      title: "Producto 4",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
      category: "calzado",
    },

    {
      id: 5,
      title: "Producto 5",
      description: "Description del producto 5",
      price: 9.9,
      pictureUrl: "https://via.placeholder.com/150",
      category: "accesorios",
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
          console.log(categoryId);
          let data = response;
          if (typeof categoryId !== "undefined") {
            const responseData = response;
            data = responseData.filter((id) => {
              return id.categoria === categoryId;
            });
          }
          setItems(data);
        })
        .finally(() => {
          setLoader(false);
        });
    }, 2000);
  }, [categoryId]);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {loader ? (
        <p>Cargando...</p>
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
}

export default ItemListContainer;
