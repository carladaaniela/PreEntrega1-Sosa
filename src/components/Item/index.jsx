import "./Item.css";
import ItemCount from "../ItemCount";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount />
    </div>
  );
};

export default Item;
