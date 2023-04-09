import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [middleCount, setMiddleCount] = useState(0);
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
      <div className="add-remove">
        <button
          className="item-count-button"
          onClick={handleDecrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className="item-count-button middle-button"
          onClick={() => setMiddleCount(count)}
          disabled={count < 1 || count > stock}
        >
          {middleCount ? middleCount : ""}
        </button>
        <button
          className="item-count-button"
          onClick={handleIncrement}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="item-count-add-button"
          onClick={handleAddToCart}
          disabled={count > stock || count < 1}
        >
          Agregar al Carrito
        </button>
      </div>
      {count > stock && (
        <p className="item-count-error">No hay suficiente stock</p>
      )}
      <span className="selected-count">{count}</span>
    </div>
  );
};

export default ItemCount;
