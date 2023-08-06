import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Badge } from "@mui/material";
import { pink } from "@mui/material/colors";

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <Link to="/cart">
      <Badge badgeContent={4} color="primary"></Badge>

      <Badge badgeContent={cart.length} showZero color="primary">
        <ShoppingCartIcon sx={{ color: pink[500] }} />
      </Badge>
    </Link>
  );
};
export default CartWidget;