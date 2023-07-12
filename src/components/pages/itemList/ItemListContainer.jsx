  import { products } from "../../../productsMock";
  import ItemList from "./Itemlist"
  import { useState, useEffect } from "react";
  import "./itemList.css"
  import { useParams } from "react-router-dom";

  const ItemListContainer = () => {
      const [items, setItems] = useState([]);
      const [error,setError] = useState ({});

const {seccion} = useParams ()
console.log("seccion:", seccion)

      useEffect(() => {
        let productsFiltrados = products.filter (products.category ==="seccion")
        const tarea = new Promise((resolve, reject) => {
          resolve(seccion === undefined ? products: productsFiltrados);
          reject ({message: "Direccion no encontrada", status: 404})
        });

        tarea
          .then((respuesta) => setItems(respuesta))
          .catch((error) => console.log(error));
      }, [seccion]);

      console.log(items)
      
    return <ItemList items={items}/>;
  };

  export default ItemListContainer;   
































// import { useState, useEffect } from "react";
// import { products } from "../../../productsMock";
// import itemList from "./ItemList";

// const ItemlistContainer = () => {
//   const [items, serItems] = useState([]);
//   const [error, setError] = useState([]);

//   useEffect(() => {
//     const tarea = new Promise((resolve, reject) => {
//       resolve(products);
//     })

//       .then((respuesta) => setItems(respuesta))
//       .catch((error) => setError(error));
//   }, []);

//   return <Itemlist items={items} />;
// };

// export default ItemlistContainer;
