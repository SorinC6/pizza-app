import React from "react";
import styled from "styled-components";
import { DialogContent, DialogFooter, ConfirmButton } from "../Dialog/Dialog";

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
`;
const OrderItem = styled.div`
  padding: 10px 0;
`;

export default function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your Order is empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order</OrderContainer>
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>{order.name}</OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Check Out</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
