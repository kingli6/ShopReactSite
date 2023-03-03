import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/cart.jsx";
import { Shop } from "./pages/shop/shop.jsx";
import { Support } from "./pages/support/support";
import { ShopContextProvider } from "./context/shop-context.jsx";

function App() {
  //
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
