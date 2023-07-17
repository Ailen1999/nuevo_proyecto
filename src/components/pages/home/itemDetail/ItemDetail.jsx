import { useEffect, useState } from "react";
import  {products}  from "../../../../productsMock";
import { useParams } from "react-router-dom";
import CounterCointainer from "../../../common/cartWidget/counter/CounterCointainer";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productosSeleccionado = products.find(
      (elemento) => elemento.id === +id
    );
    const tarea = new Promise((res, rej) => {
      res(productosSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {console.log(producto);
  console.log(cantidad)};

  return (
    <div className="ctn-item-detail">
      <img src={producto.img}></img>
      <div className="ctn-i-product">
        <h2>{producto.title}</h2>
        <h4>{producto.price}</h4>
      </div>
      <CounterCointainer stock={producto.price} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
