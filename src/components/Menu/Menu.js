import React from "react";
import styled from "styled-components";
import { foods } from "../../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
const MenuStyled = styled.div`
  height: 1000px;
  max-width: 1200px;
  margin: 0 auto;
  margin: 0px 400px 50px 20px;
`;
export default function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map(food => {
              return (
                <Food
                  img={food.img}
                  key={food.name}
                  onClick={() => {
                    setOpenFood(food);
                  }}
                >
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
