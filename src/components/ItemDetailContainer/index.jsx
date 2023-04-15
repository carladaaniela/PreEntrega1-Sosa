import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import ItemList from "../ItemList";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import LoadingMessage from "@Components/Loading";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [products, setProducts] = useState({});
  const [loader, setLoader] = useState(true);

  const fetchUserData = async () => {
    const db = getFirestore();
    const queries = doc(db, "items", "u0IVPxb0jvHR2pcCj0c4");
    await getDoc(queries)
      .then((response) => {
        let data = response.data().items;
        const filtredData = data.filter((rp) => {
          return rp.id === Number(itemId);
        });

        setProducts(filtredData[0]);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {" "}
      {loader ? (
        <LoadingMessage />
      ) : products ? (
        <div className="d-flex flex-column flex-grow-1">
          <ItemDetail items={products} />
        </div>
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
}

export default ItemDetailContainer;
