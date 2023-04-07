import ItemCount from "../ItemCount";
import "./ItemDetail.css";

function ItemDetail({ items }) {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const handleAddtoCart = (quantity) => {
    setSelectedQuantity(quantity);
  };

  return (
    <div>
      <h1>Detalle de producto</h1>
      <img src={items.pictureUrl} alt={items.title} />
      <h2>{items.title}</h2>
      <p>{items.description}</p>
      <p>Precio: ${items.price}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount stock={5} initial={1} onAdd={handleAddtoCart} />
      <Link to="/cart">
        <button>Terminar mi compra</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
