import "./Item.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="products">
      <Link to={`/item/${item.id}`}>
        <img className="imageProducts" src={item.pictureUrl} alt={item.title} />
      </Link>
      <div className="details">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <ItemCount className="itemCount" />
      </div>
    </div>
  );
};

export default Item;
