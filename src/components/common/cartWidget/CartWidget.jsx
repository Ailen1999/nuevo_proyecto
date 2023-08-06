import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../pages/carrito/CartContext";


const CartWidget = () => {
    const { cart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="iconCart">
         <Link to="/Cart">
        <Badge badgeContent={cart.length} color="secondary">
          <AddShoppingCart color="action" />
        </Badge>
        </Link>
      </div>
    </div>
  );
};

export default CartWidget
