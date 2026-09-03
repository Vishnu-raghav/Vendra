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
import { Cart } from "./pages/Cart/Cart";
import { Orders } from "./pages/Orders/Orders";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <main>
        <div className="content-container">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
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