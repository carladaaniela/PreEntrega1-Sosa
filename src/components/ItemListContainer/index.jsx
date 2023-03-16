import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const mockItems = [
    {
      id: 1,
      title: "Remera",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "/src/assets/img/violetshirt.svg",
      category: "remeras",
    },

    {
      id: 2,
      title: "Pantalon",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "/src/assets/img/purplepants.svg",
      category: "pantalones",
    },

    {
      id: 3,
      title: "Campera",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "/src/assets/img/purplehoodie.svg",
      category: "camperas",
    },

    {
      id: 4,
      title: "Calzado",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "/src/assets/img/purpleshoes.svg",
      category: "calzado",
    },

    {
      id: 5,
      title: "Accesorio",
      description: "Description del producto 5",
      price: 9.9,
      pictureUrl: "/src/assets/img/purplenicklace2.svg",
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
          let data = response;
          if (typeof categoryId !== "undefined") {
            const responseData = response;
            data = responseData.filter((id) => {
              return id.category === categoryId;
            });
          }
          setItems(data);
        })
        .finally(() => {
          setLoader(false);
        });
    }, 1000);
  }, [categoryId]);

  return (
    <div>
      <h1 className="tittleProductList">Lista de Productos</h1>
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
