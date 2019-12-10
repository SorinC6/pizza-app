import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Navbar from "./Navbar.js/Navbar";
import { Banner } from "./Banner/Banner";
import Menu from "./Menu/Menu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
      <p>Hello</p>
    </>
  );
}

export default App;
