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
      description: "Remera lila manga corta",
      price: 1500,
      pictureUrl: "/src/assets/img/violetshirt.svg",
      category: "remeras",
      stock: 20,
    },

    {
      id: 2,
      title: "Pantalon",
      description: "Pantalon jogger purpura",
      price: 4000,
      pictureUrl: "/src/assets/img/purplepants.svg",
      category: "pantalones",
      stock: 30,
    },

    {
      id: 3,
      title: "Buzo",
      description: "Buzo canguro purpura",
      price: 3500,
      pictureUrl: "/src/assets/img/purplehoodie.svg",
      category: "camperas",
      stock: 15,
    },

    {
      id: 4,
      title: "Zapatillas",
      description: "Sneakers Violetas",
      price: 9700,
      pictureUrl: "/src/assets/img/purpleshoes.svg",
      category: "calzado",
      stock: 10,
    },

    {
      id: 5,
      title: "Collar",
      description: "Collar violeta con dije",
      price: 1000,
      pictureUrl: "/src/assets/img/purplenicklace2.svg",
      category: "accesorios",
      stock: 25,
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
