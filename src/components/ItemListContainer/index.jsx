import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import ItemList from "../ItemList";
import LoadingMessage from "@Components/Loading";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchUserData = async () => {
    const db = getFirestore();
    const queries = doc(db, "items", "u0IVPxb0jvHR2pcCj0c4");
    await getDoc(queries)
      .then((response) => {
        let data = response.data().items;
        if (typeof categoryId !== "undefined") {
          const responseData = response.data().items;
          data = responseData.filter((id) => {
            return id.category === categoryId;
          });
        }
        setProducts(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [categoryId]);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <h1 className="tittleProductList">Lista de Productos</h1>
      {loader ? (
        <LoadingMessage />
      ) : products.length > 0 ? (
        <ItemList items={products} />
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
}

export default ItemListContainer;
