import { Navbar } from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/Itemlist";
import { useState } from "react";



function App() {
  
  const[saludo, setSaludo] = useState ("Hola coder")
  return (
    <div>
      <Navbar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
