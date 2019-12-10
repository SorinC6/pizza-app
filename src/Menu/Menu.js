import React from "react";
import styled from "styled-components";
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;
export default function Menu() {
  console.log(foods);
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map(food => {
              return (
                <Food img={food.img} key={food.name}>
                  <FoodLabel>{food.name}</FoodLabel>
                </Food>
              );
            })}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
