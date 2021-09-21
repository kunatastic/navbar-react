import { useState } from "react";
import Body from "./Components/body";
import NavBar from "./Components/navbar";
import logo from "./logo.svg";
import "./index.css";

function App() {
  const [openNavbar, setOpenNavbar] = useState(true);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: openNavbar ? "15vw" : "5vw" }} className="navbar">
          <NavBar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        </div>
        <div style={{ height: "1000vh" }}>
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
