import "./CardWidget.css";
import { CartIcon } from "../icons";

function CardWidget() {
  return (
    <div className="cartConteiner cardWidget">
      <div className="cart">
        <CartIcon />
        <span className="cartNumber hardCode">24</span>
      </div>
    </div>
  );
}

export default CardWidget;
