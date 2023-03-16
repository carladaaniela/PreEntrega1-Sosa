import ItemCount from "../ItemCount";
import "./ItemDetail.css";

function ItemDetail({ items }) {
  return (
    <div>
      <h1>Detalle de producto</h1>
      <img src={items.pictureUrl} alt={items.title} />
      <h2>{items.title}</h2>
      <p>{items.description}</p>
      <p>Precio: ${items.price}</p>
      <ItemCount />
    </div>
  );
}

export default ItemDetail;
