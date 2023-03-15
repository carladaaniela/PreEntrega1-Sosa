import "./Item.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <Link to={`/item/${item.id}`}>
        <img src={item.pictureUrl} alt={item.title} />
      </Link>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount />
    </div>
  );
};

export default Item;
