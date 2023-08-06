import CartContainer from "../components/pages/carrito/CartCointeiner";
import CheckoutContainer from "../components/pages/checkout/checkoutContainer";
import FormularioFormik from "../components/pages/formularioFormik/FormularioFormik";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailConteiner from "../components/pages/itemList/itemDetail/ItemDetailConteiner";
import Dashboard from "../dashboard/Dashboard";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetailConteiner,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormularioFormik,
  },

  {
    id: "dashboard",
    path: "./dashboard",
    Element: Dashboard,
  },
];
