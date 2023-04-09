import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import ItemList from "../ItemList";
import ItemCount from "../ItemCount";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
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
    {
      id: 6,
      title: "Remera violeta",
      description: "Remera violeta hombre",
      price: 2000,
      pictureUrl: "/src/assets/img/remeravioleta.svg",
      category: "remeras",
      stock: 30,
    },
    {
      id: 7,
      title: "Jean",
      description: "Jean Lila",
      price: 7000,
      pictureUrl: "/src/assets/img/jeanvioleta.svg",
      category: "pantalones",
      stock: 5,
    },
    {
      id: 8,
      title: "Sweater Lila",
      description: "Sweater lila tejido",
      price: 8500,
      pictureUrl: "/src/assets/img/sweatervioleta.svg",
      category: "camperas",
      stock: 14,
    },
  ];

  const mockPromise = () => {
    return new Promise((resolve) => {
      resolve(mockItems);
    });
  };

  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      mockPromise()
        .then((response) => {
          const handleData = response.filter((product) => {
            return product.id === Number(itemId);
          });
          const data = handleData[0];
          setItem(data);
        })
        .finally(() => {
          setLoader(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {loader ? (
        <p>Cargando...</p>
      ) : item ? (
        <ItemDetail items={item} />
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
