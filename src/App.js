import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import FoodDialog from "./components/Dialog/Dialog";
import Order from "./components/Order/Order";
import { useOpenFood } from "./components/hooks/useOpenFood";
import { useOrders } from "./components/hooks/useOrders";
import { useTitle } from "./components/hooks/useTitle";
import { useAuthentication } from "./components/hooks/useAuthentication";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();

  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
