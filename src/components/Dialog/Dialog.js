import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";

const Dialog = styled.div`
  width: 500px;
  height: 2000px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100vh - 100px);
  left: calc(50vw - 250px);
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
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
export default function FoodDialog({ openFood, setOpenFood }) {
  console.log(openFood);
  return openFood ? (
    <>
      <DialogShadow onClick={() => setOpenFood(null)} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
      </Dialog>
    </>
  ) : null;
}
