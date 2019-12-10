import React, { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import FoodDialog from "./components/Dialog/Dialog";
import Order from "./components/Order/Order";

function App() {
  const [openFood, setOpenFood] = useState(null);
  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
