import React from "react";
import styled from "styled-components";
import { foods } from "../../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { formatPrice } from "../../Data/FoodData";
const MenuStyled = styled.div`
  height: 1000px;
  max-width: 1200px;
  margin: 0 auto;
  margin: 0px 400px 50px 20px;

  @media (max-width: 600px) {
    margin: 0px 10px 50px 20px;
  }
`;
export default function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods], idx) => (
        <div key={idx}>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food, idx) => {
              return (
                <Food
                  img={food.img}
                  key={idx}
                  onClick={() => {
                    setOpenFood(food);
                  }}
                >
                  <FoodLabel>
                    <div>{food.name}</div>
                    <div>{formatPrice(food.price)}</div>
                  </FoodLabel>
                </Food>
              );
            })}
          </FoodGrid>
        </div>
      ))}
    </MenuStyled>
  );
}
