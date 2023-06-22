import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="containerNav">
      <img className="logo" src="./img/img_logo.jpg" alt="" />
      <ul className="lista">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Sucursal</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;