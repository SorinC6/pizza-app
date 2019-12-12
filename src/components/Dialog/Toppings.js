import React from "react";
import styled from "styled-components";

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: baseline;
`;

export default function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingGrid>
      {toppings.map((topping, index) => (
        <CheckboxLabel key={index}>
          <ToppingCheckbox
            type="checkbox"
            checked={topping.checked}
            onClick={() => checkTopping(index)}
            readOnly
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingGrid>
  );
}
