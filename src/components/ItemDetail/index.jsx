import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function ItemDetail({ items }) {
  const { pictureUrl, title, description, price, stock } = items;

  return (
    <div>
      <div className="itemDetail">
        <h1>Detalle de producto</h1>
        <img src={pictureUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
        <ItemCount stock={5} />
        <button>Terminar mi compra</button>
      </div>
      <div>
        <Link to="/cart"></Link>
      </div>
    </div>
  );
}

export default ItemDetail;
