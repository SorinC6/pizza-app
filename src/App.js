import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import FoodDialog from "./components/Dialog/Dialog";
import Order from "./components/Order/Order";
import OrderDialog from "./components/Order/OrderDialog";
import MobileOrder from "./components/Order/MobileOrder";
import { useOpenFood } from "./components/hooks/useOpenFood";
import { useOrders } from "./components/hooks/useOrders";
import { useTitle } from "./components/hooks/useTitle";
import { useAuthentication } from "./components/hooks/useAuthentication";
import { useOrderDialog } from "./components/hooks/useOrderDialog";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({ ...openFood, ...orders });

  console.log(orders.displayOrder);

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} {...orders} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
      {orders.displayOrder && (
        <MobileOrder {...orders} {...openFood} {...auth} {...orderDialog} />
      )}
    </>
  );
}

export default App;
