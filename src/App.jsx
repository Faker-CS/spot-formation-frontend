import "./App.css";
import { P3, P2 } from "./components/common/Typography/Typography";
import Hero from "./components/hero/Hero";
import Navbar from "./components/layout/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="app-background">
        <div className="app-support-bar">
          <P2>Vous avez une question ? (de 8h à 18h)</P2>

          <img
            src="/assets/icons/icon-phone.svg"
            alt=""
            aria-hidden="true"
            className="phone-icon"
            style={{ width: "24px", height: "24px" }}
          />
          <P3 className="phone-number">+33 6 00 00 00 00</P3>
        </div>
      </div>

      <Hero />
    </>
  );
}

export default App;
