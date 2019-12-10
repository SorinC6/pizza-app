import React, { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import FoodDialog from "./components/Dialog/Dialog";

function App() {
  const [openFood, setOpenFood] = useState(null);
  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
