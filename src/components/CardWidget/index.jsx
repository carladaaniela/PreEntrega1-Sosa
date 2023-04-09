import "./CardWidget.css";
import { Link } from "react-router-dom";
import { CartIcon } from "../icons";
import { useCartContext } from "../../context";

function CardWidget() {
  const { productsAdded } = useCartContext();

  return (
    <div className="cartConteiner">
      <Link to={"/cart"}>
        <div className="cart">
          <CartIcon />
          {productsAdded.length}
        </div>
      </Link>
    </div>
  );
}

export default CardWidget;
