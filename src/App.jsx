import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import Cart from "./Pages/cart/Cart";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Checkout from "./Pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route path="*" element={<h1> 404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
