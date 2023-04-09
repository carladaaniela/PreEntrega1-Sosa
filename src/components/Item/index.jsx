import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="card my-2">
        <img className="card-img-top" src={item.pictureUrl} alt={item.title} />
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.description}</p>
          <p className="card-text">Precio: ${item.price}</p>
          <p className="card-text">Stock: {item.stock}</p>
          <div className="d-flex ">
            <ItemCount className="itemCount pr-2" item={item} />
          </div>
          <Link to="/cart">
            <button className="endPurchase">Terminar mi compra</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
