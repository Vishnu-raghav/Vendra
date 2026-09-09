import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MobileNav } from "./components/MobileNavbar/MobileNav";

import { Home } from "./pages/Home/Home";
import { Orders } from "./pages/Orders/Orders";
import { CartSummary } from "./components/CartSummary/CartSummary";
import { CartPayment } from "./components/CartPayemnt/CartPayment";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <main>
        <div className="content-container">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />}> 
              <Route index element={<Cart />} />
              <Route path="summary" element={<CartSummary />} />
              <Route path="payment" element={<CartPayment />} />
              {/* <Route path="success" element={<} /> */}
            </Route>
            <Route path="/orders" element={<Orders />} />
          </Routes>

        </div>
      </main>

      <MobileNav />

      <Footer />

    </BrowserRouter>
  );
}

export default App;