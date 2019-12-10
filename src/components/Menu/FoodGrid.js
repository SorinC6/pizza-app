import styled from "styled-components";
import { Title } from "../../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  padding: 5px;
`;

export const Food = styled.div`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${props => (props.img ? `url(${props.img})` : "")};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 5px;
  box-shadow: 0px 0px 2px grey;
  transition: 1s all;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px grey;
    transform: translateY(-5px);
    filter: contrast(100%);
  }
`;
