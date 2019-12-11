import React, { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import FoodDialog from "./components/Dialog/Dialog";
import Order from "./components/Order/Order";
import { useOpenFood } from "./components/hooks/useOpenFood";
import { useOrders } from "./components/hooks/useOrders";
import { useTitle } from "./components/hooks/useTitle";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
