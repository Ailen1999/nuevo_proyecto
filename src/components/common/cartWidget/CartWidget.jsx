import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "./CartWidget";

const CartWidget = () => {
  return (
    <div className="container">
      <div className="iconCart">
        <Badge badgeContent={2} color="secondary">
          <AddShoppingCart color="action" />
        </Badge>
      </div>
    </div>
  );
};

export default CartWidget
