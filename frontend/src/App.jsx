import "./App.css";
// import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MobileNav } from "./components/MobileNavbar/MobileNav";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        <main>
          <div className="content-container">{/* page content */}</div>
        </main>

        <MobileNav />

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
