import { useState } from "react";

export function useOrders() {
  const [orders, setOrders] = useState([]);
  const [displayOrder, setDisplayOrder] = useState(false);
  return {
    orders,
    setOrders,
    displayOrder,
    setDisplayOrder
  };
}
