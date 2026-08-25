import "./App.css";
// import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        <main>
          <div className="content-container">{/* page content */}</div>
        </main>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
