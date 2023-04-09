import "./Item.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="productsContainer">
      <div className="productsCard">
        <div>
          <Link to={`/item/${item.id}`}>
            <img
              className="imageProducts"
              src={item.pictureUrl}
              alt={item.title}
            />
          </Link>
        </div>

        <div className="details">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          <p>Stock: {item.stock}</p>
        </div>

        <div className="buttonContainer">
          <ItemCount className="itemCount" />
          <Link to="/cart">
            <button className="endPurchase">Terminar mi compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
