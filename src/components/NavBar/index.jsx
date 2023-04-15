import "../CardWidget";
import CardWidget from "../CardWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="optionsContainer">
      <ul>
        <li>
          <Link className="options" to={"/"}>
            <img className="logoRott" src="./logo.png" />
          </Link>
        </li>
        <li>
          <Link className="options" to={"/category/remeras"}>
            Remeras
          </Link>
        </li>

        <li>
          <Link className="options" to={"/category/pantalones"}>
            Pantalones
          </Link>
        </li>

        <li>
          <Link className="options" to={"/category/abrigos"}>
            Abrigos
          </Link>
        </li>

        <li>
          <Link className="options" to={"/category/calzado"}>
            Calzado
          </Link>
        </li>

        <li>
          <Link className="options" to={"/category/accesorios"}>
            Accesorios
          </Link>
        </li>

        <li>
          <CardWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
