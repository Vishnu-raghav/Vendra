import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MobileNav } from "./components/MobileNavbar/MobileNav";
import { Home } from "./pages/Home/Home";


function App() {
  return (
    <>
        <Header />
        <main>
          <div className="content-container">
            <Home />
          </div>
        </main>
        <MobileNav />

        <Footer />
    </>
  );
}

export default App;
