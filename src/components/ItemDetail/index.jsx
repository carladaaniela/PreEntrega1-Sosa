import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function ItemDetail({ items }) {
  const { pictureUrl, title, description, price, stock } = items;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1>Detalle de producto</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img className="w-100" src={pictureUrl} alt={title} />
        </div>
        <div className="col-lg-6">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Precio: ${price}</p>
          <p>Stock: {stock}</p>
          <ItemCount stock={5} />
          <Link to="/cart">
            <button>Terminar mi compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
