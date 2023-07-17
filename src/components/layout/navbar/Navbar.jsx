import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="containerNav">
      <Link to="./">
      <img className="logo" src="../img/img_logo.jpg" alt="" />
      </Link>
      <ul className="lista">
        <Link to="/">Inicio</Link>
        <Link to="/category/maquillaje">Maquillaje</Link>
        <Link to="/category/facial">Facial</Link>
        <Link to="/category/glitter">Glitter</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
