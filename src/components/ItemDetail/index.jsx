import ItemCount from "../ItemCount";
import React, { useState } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

function ItemDetail({ items }) {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const handleAddtoCart = (quantity) => {
    setSelectedQuantity(quantity);
  };

  return (
    <div>
      <div className="itemDetail">
        <h1>Detalle de producto</h1>
        <img src={items.pictureUrl} alt={items.title} />
        <h2>{items.title}</h2>
        <p>{items.description}</p>
        <p>Precio: ${items.price}</p>
        <p>Stock: {items.stock}</p>
        <p>{selectedQuantity}</p>
        <ItemCount stock={5} initial={1} onAdd={handleAddtoCart} />
        <button>Terminar mi compra</button>
      </div>
      <div>
        <Link to="/">Volver a la tienda</Link>
      </div>
    </div>
  );
}

export default ItemDetail;
