import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count-container">
      <button
        className="item-count-button"
        onClick={handleDecrement}
        disabled={count <= 1}
      >
        -
      </button>
      <span className="item-count">{count}</span>
      <button
        className="item-count-button"
        onClick={handleIncrement}
        disabled={count >= stock}
      >
        +
      </button>
      <button
        className="item-count-add-button"
        onClick={handleAddToCart}
        disabled={count > stock || count < 1}
      >
        Agregar al Carrito
      </button>
      {count > stock && (
        <p className="item-count-error">No hay suficiente stock</p>
      )}
    </div>
  );
};

export default ItemCount;
