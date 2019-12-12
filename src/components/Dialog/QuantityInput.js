import React from "react";
import styled from "styled-components";
import { Title } from "../../Styles/title";
import { pizzaColor } from "../../Styles/colors";

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 23px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaColor};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaColor};
  ${({ disable }) => disable && `opacity:0.5; pointer-events:none;`}
  &:hover {
    background-color: lightgray;
  }
`;

const QuantitInput = ({ quantity }) => {
  return (
    <div>
      <IncrementContainer>
        <div>Quantity:</div>
        <IncrementButton
          onClick={() => {
            quantity.setValue(quantity.value - 1);
          }}
          disable={quantity.value === 1}
        >
          -
        </IncrementButton>
        <QuantityInputStyled {...quantity} />
        <IncrementButton
          onClick={() => {
            quantity.setValue(quantity.value + 1);
          }}
        >
          +
        </IncrementButton>
      </IncrementContainer>
    </div>
  );
};

export default QuantitInput;
