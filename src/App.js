// Import components
import Navbar from "./components/Navbar";

import Logo from "./components/Navbar/Logo";
import './components/style.css';
import React, { useState } from "react";

import HeroDetails from "./components/HeroDetail";
import Home from "./components/Home";

// Import dependencies
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
    <BrowserRouter>
       <Navbar logo={<Logo  text={"Hashmath's Marvel"} src={'https://www.freeiconspng.com/thumbs/iron-man-png/iron-man-png-9.png'}  />}>
         {/* <NavItem to={"/"} text={""} />  */}
        
      </Navbar> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
       {/* <Footer/>  */}
    </BrowserRouter>)
  );
}

export default App;
