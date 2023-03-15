import ItemCount from "../ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div>
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount />
    </div>
  );
}

export default ItemDetail;
