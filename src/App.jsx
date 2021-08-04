import { useState } from "react";
import "./app.scss";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Aboutme />
        <Portfolio />

        <Contact />
      </div>
    </div>
  );
}

export default App;
