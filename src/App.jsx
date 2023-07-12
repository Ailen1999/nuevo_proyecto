import ItemlistContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Cart from "./components/pages/carrito/Cart";
import ItemDetail from "./components/pages/home/itemDetail/ItemDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemlistContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
            <Route path="/carrito" element={<Cart />} />
          </Route>
          <Route path="*" element={<h1>Error </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
