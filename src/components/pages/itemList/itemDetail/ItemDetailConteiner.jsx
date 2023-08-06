import { db } from "../../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../carrito/CartContext";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailConteiner = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});

  const { id } = useParams();
  const totalQuantity = getQuantityById(id);
  console.log(totalQuantity);

  useEffect(() => {
    let productsCollection = collection(db, "datos");
    console.log(productsCollection);
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);

    toast.success("¡Su producto fue agregado!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <ItemDetail
      onAdd={onAdd}
      totalQuantity={totalQuantity}
      producto={producto}
    />
  );
};

export default ItemDetailConteiner;
