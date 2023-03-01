import "./Navbar.css";
import "../CardWidget";
import CardWidget from "../CardWidget";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <a href="">Remeras</a>
        </li>

        <li>
          <a href="">Pantalones</a>
        </li>

        <li>
          <a href="">Camperas</a>
        </li>

        <li>
          <a href="">Calzado</a>
        </li>

        <li>
          <a href="">Accesorios</a>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
