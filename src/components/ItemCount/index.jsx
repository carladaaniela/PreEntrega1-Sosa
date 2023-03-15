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
    <div>
      <button onClick={handleDecrement} disabled={count <= 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count >= stock}>
        +
      </button>
      <button onClick={handleAddToCart} disabled={count > stock || count < 1}>
        Agregar al Carrito
      </button>
      {count > stock && <p>No hay suficiente stock</p>}
    </div>
  );
};

export default ItemCount;
