import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function ItemDetail({ items }) {
  const { pictureUrl, title, description, price, stock } = items;

  return (
    <div>
      <h1>Detalle de producto</h1>
      <img src={pictureUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>
      <ItemCount stock={5} />
      <Link to="/cart">
        <button>Terminar mi compra</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
