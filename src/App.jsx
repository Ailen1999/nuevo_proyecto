import ItemlistContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Cart from "./components/pages/carrito/Cart";
import ItemDetail from "./components/pages/home/itemDetail/ItemDetail";
import CartCointeiner from "./components/common/cartWidget/CartCointeiner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemlistContainer />} />
            <Route path="/category/:categoryName" element={<ItemlistContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<CartCointeiner />} />
          </Route>
          <Route path="*" element={<h1>Error </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
