  import { products } from "../../../productsMock";
  import ItemList from "./Itemlist"
  import { useState, useEffect } from "react";
  import "./itemList.css"
  import { useParams } from "react-router-dom";

  const ItemListContainer = () => {
      const [items, setItems] = useState([]);
      const [error, setError] = useState ({});

const {categoryName} = useParams ()

      useEffect(() => {
        let productsFiltrados = products.filter (
          (products) => products.category === categoryName
        );

        const tarea = new Promise((resolve, reject) => {
          resolve(categoryName === undefined ? products: productsFiltrados);
        });

        tarea
          .then((respuesta) => setItems(respuesta))
          .catch((error) => console.log(error));
      }, [categoryName]);

      
    return <ItemList items={items}/>;
  };

  export default ItemListContainer;   

