import ItemList from "./Itemlist";
import { useState, useEffect } from "react";
import "./itemList.css";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "datos");
    let consultaFiltrada;
    if (categoryName) {
      consultaFiltrada = query(productsCollection, where("category", "==", categoryName));
    } else {
      consultaFiltrada = productsCollection
    }

    getDocs(consultaFiltrada).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(productos)
    });

  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );};

export default ItemListContainer;
