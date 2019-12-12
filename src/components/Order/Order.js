import React from "react";
import styled from "styled-components";
import { DialogContent, DialogFooter, ConfirmButton } from "../Dialog/Dialog";
import { formatPrice } from "../../Data/FoodData";
import { getPrice } from "../Dialog/Dialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 50px;
  width: 340px;
  height: calc(100vh - 55px);
  background-color: white;
  z-index: 7;
  box-shadow: 0px 0px 5px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover{
      cursor:pointer;
      background-color:#e7e7e7
    }
  `
      : `
      pointer-events:none
      `}
`;
const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
`;

export default function Order({
  orders,
  setOrders,
  setOpenFood,
  loggedIn,
  login,
  database
}) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const deleteItems = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const sendOrder = (orders, { email, displayName }) => {
    const newOrderRef = database.ref("orders").push();
    const newOrders = orders.map(order => {
      return Object.keys(order).reduce((acc, orderKey) => {
        if (!order[orderKey]) {
          return acc;
        }
        if (orderKey === "toppings") {
          return {
            ...acc,
            [orderKey]: order[orderKey]
              .filter(({ checked }) => checked)
              .map(({ name }) => name)
          };
        }
        return {
          ...acc,
          [orderKey]: order[orderKey]
        };
      }, {});
    });
    console.log(newOrders);

    newOrderRef.set({
      orders: newOrders,
      email,
      displayName
    });
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your Order is empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order</OrderContainer>
          {orders.map((order, idx) => (
            <OrderContainer key={idx} editable>
              <OrderItem onClick={() => setOpenFood({ ...order, idx })}>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    e.stopPropagation();
                    deleteItems(idx);
                  }}
                >
                  🗑
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter(item => item.checked)
                  .map(topping => topping.name)
                  .join(",")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Subtotal:</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton
          onClick={() => {
            if (loggedIn) {
              sendOrder(orders, loggedIn);
            } else {
              login();
            }
          }}
        >
          Check Out
        </ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
