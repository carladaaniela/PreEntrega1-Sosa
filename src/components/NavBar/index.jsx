import "./Navbar.css";
import "../CardWidget";
import CardWidget from "../CardWidget";

function NavBar() {
  return (
    <div className="optionsContainer">
      <ul>
        <li>
          <a className="options" href="">
            Remeras
          </a>
        </li>

        <li>
          <a className="options" href="">
            Pantalones
          </a>
        </li>

        <li>
          <a className="options" href="">
            Camperas
          </a>
        </li>

        <li>
          <a className="options" href="">
            Calzado
          </a>
        </li>

        <li>
          <a className="options" href="">
            Accesorios
          </a>
        </li>

        <li>
          <CardWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
