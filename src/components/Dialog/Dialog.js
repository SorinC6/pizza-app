import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaColor } from "../../Styles/colors";
import { Title } from "../../Styles/title";
import { formatPrice } from "../../Data/FoodData";
import { useQuantity } from "../hooks/useQuantity";
import { useToppings } from "../hooks/useToppings";
import { useChoice } from "../hooks/useChoice";
import Toppings from "./Toppings";
import QuantityInput from "./QuantityInput";
import Choices from "./Choices";

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
  ${({ img }) => (img ? `background-image: url(${img})` : `min-height: 75px`)};
  background-position: center;
  background-size: cover;
`;

export const DialogContent = styled.div`
  min-height: 100px;
  overflow: auto;
  padding: 0 40px;
  padding-bottom: 60px;
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
  ${({ disabled }) =>
    disabled &&
    `
    opacity:0.5;
    background-colot:grey;
    pointer-events:none;
  `}
`;

const DialogBannerName = styled(FoodLabel)`
  top: ${({ img }) => (img ? "100px" : "20px")};
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

const toppingPrice = 0.35;
export const getPrice = order => {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter(item => item.checked).length * toppingPrice)
  );
};

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);

  const closeDialog = () => {
    setOpenFood(null);
  };

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value
  };
  const addToOrder = () => {
    setOrders([...orders, order]);
    closeDialog();
  };

  const hasToppings = food => {
    return food.section === "Pizza";
  };

  return openFood ? (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />

          {hasToppings(openFood) && (
            <>
              <h3>Whould you like toppings?</h3>
              <Toppings {...toppings} />
            </>
          )}
          {openFood.choices && (
            <Choices choiceRadio={choiceRadio} openFood={openFood} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            Add to order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null;
}

export default function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
