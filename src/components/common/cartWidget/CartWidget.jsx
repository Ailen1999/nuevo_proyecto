import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "./CartWidget";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="container">
      <div className="iconCart">
         <Link to="/Cart">
        <Badge badgeContent={2} color="secondary">
          <AddShoppingCart color="action" />
        </Badge>
        </Link>
      </div>
    </div>
  );
};

export default CartWidget
