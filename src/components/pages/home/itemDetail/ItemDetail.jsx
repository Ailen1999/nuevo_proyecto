import { useEffect, useState } from "react"
import { products } from "../../../../productsMock"
import { useParams } from "react-router-dom"
import CounterCointainer from "../../../common/cartWidget/counter/CounterCointainer"

const itemDetail =() => {
const  [producto, setProducto]= useState({});

const {id} = useParams()

useEffect(() => {
    let productosSeleccionado = products.find ((elemento) => elemento.id ===+id);
    const tarea =new Promise((res,rej) =>{
        res (productosSeleccionado)
    })
    tarea.then (res => setProducto(res))
},  [ id])

const onAdd = (cantidad) =>
console.log (producto);
console.log(cantidad);

  return (
    <div>
    <h2>{producto.title}</h2>
    <h4>{producto.price}</h4>

    </div>
    
  )
}

export default itemDetail