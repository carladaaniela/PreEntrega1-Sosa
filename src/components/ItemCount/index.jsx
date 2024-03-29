import { useState } from "react";
import { useCartContext } from "@CartContext";

const ItemCount = ({ stock, item }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const { onAdd } = useCartContext();

  const handleAddtoCart = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleIncrement = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const handleDecrement = () => {
    setSelectedQuantity(selectedQuantity - 1);
  };

  const handleAddToCart = () => {
    onAdd({ ...item, selectedQuantity });
  };

  return (
    <>
      <div className="item-count-container ">
        <button
          className="item-count-button"
          onClick={handleDecrement}
          disabled={selectedQuantity <= 1}
        >
          -
        </button>
        <span className="item-count">{selectedQuantity}</span>
        <button
          className="item-count-button"
          onClick={handleIncrement}
          disabled={selectedQuantity >= stock}
        >
          +
        </button>
        <button
          className="item-count-add-button"
          onClick={handleAddToCart}
          disabled={selectedQuantity > stock || selectedQuantity < 1}
        >
          Agregar al Carrito
        </button>
        {selectedQuantity > stock && (
          <p className="item-count-error">No hay suficiente stock</p>
        )}
      </div>
    </>
  );
};

export default ItemCount;
