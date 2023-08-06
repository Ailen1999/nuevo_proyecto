import CounterCointainer from "../../../common/counter/CounterCointainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({onAdd, totalQuantity, producto}) => {
 
  return (
    <div>
      <img src={producto.img}></img>
      <h2>{producto.title}</h2>
      <h4>${producto.price}</h4>

      {(typeof totalQuantity === "undefined" ||
        producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterCointainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        )}
      {producto.stock === 0 && <h2>sin stock</h2>}
      {typeof totalQuantity !== "undefined" &&
        totalQuantity === producto.stock && (
          <h2>Maximo de productos seleccionados</h2>
        )}
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
