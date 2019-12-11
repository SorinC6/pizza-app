import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaColor } from "../../Styles/colors";
import { Title } from "../../Styles/title";
import { formatPrice } from "../../Data/FoodData";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100vh - 100px);
  left: calc(50vw - 250px);
  display: flex;
  flex-direction: column;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
`;

export const DialogContent = styled.div`
  min-height: 100px;
  overflow: auto;
`;
export const DialogFooter = styled.div`
  box-shadow: 0px -3px 20px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  background-color: ${pizzaColor};
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  font-size: 15px;
  cursor: pointer;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 33px;
  padding: 5px 40px;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0%;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export default function FoodDialog({
  openFood,
  setOpenFood,
  setOrders,
  orders
}) {
  const closeDialog = () => {
    setOpenFood(null);
  };
  if (!openFood) return null;
  //default order
  const order = {
    ...openFood
  };
  const addToOrder = () => {
    setOrders([...orders, order]);
    closeDialog();
  };

  return openFood ? (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent></DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Add to order: {formatPrice(openFood.price)}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null;
}
