import { Link } from "react-router-dom";
import { CartIcon } from "../icons";
import { useCartContext } from "@CartContext";

function CardWidget() {
  const { productsAdded } = useCartContext();

  return (
    <div className="cartConteiner cardWidget">
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
