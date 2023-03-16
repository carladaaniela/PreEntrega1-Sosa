import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import ItemList from "../ItemList";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const mockItems = [
    {
      id: 1,
      title: "Remera",
      description: "Description del producto 1",
      price: 9.9,
      pictureUrl: "/src/assets/img/violetshirt.svg",
    },

    {
      id: 2,
      title: "Pantalon",
      description: "Description del producto 2",
      price: 9.9,
      pictureUrl: "/src/assets/img/purplepants.svg",
    },

    {
      id: 3,
      title: "Campera",
      description: "Description del producto 3",
      price: 9.9,
      pictureUrl: "/src/assets/img/purplehoodie.svg",
    },

    {
      id: 4,
      title: "Calzado",
      description: "Description del producto 4",
      price: 9.9,
      pictureUrl: "/src/assets/img/purpleshoes.svg",
    },
    {
      id: 5,
      title: "Accesorios",
      description: "Description del producto 5",
      price: 9.9,
      pictureUrl: "/src/assets/img/purplenicklace2.svg",
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
