import "./CardWidget.css";
import { CartIcon } from "../icons";
import { useContext } from "react";
import { Context } from "../../context";

function CardWidget() {
  const { productsAdded } = useContext(Context);
  return (
    <div className="cartConteiner cardWidget">
      <div className="cart">
        <CartIcon />
        {productsAdded.length}
      </div>
    </div>
  );
}

export default CardWidget;
