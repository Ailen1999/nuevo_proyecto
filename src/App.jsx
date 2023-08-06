
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContextComponent from "./components/pages/carrito/CartContext";

function App() {
  return (
    <div>
     
        <BrowserRouter>
              <CartContextComponent>
                 <AppRouter />
              </CartContextComponent>
            </BrowserRouter>
         
    </div>
  );
}

export default App;
