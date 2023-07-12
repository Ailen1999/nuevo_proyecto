import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <div className="containerNav">
      <img className="logo" src="./img/img_logo.jpg" alt="" />
      <ul className="lista">
        <link to="/">Inicio</link>
        <link to="/seccion/maquillaje">Maquillaje</link>
        <link to="/seccion/facial">Facial</link>
        <link to="/seccion/glitter">Glitter</link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;