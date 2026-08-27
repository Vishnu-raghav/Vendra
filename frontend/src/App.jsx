import "./App.css";
// import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MobileNav } from "./components/MobileNavbar/MobileNav";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        <main>
          <div className="content-container">
            <Home />
            <ProductCard />
          </div>
        </main>

        <MobileNav />

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
