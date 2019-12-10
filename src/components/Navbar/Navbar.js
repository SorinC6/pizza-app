import React from "react";
import styled from "styled-components";
import { pizzaColor } from "../../Styles/colors";
import { Title } from "../../Styles/title";

const NavbarWrapper = styled.div`
  background-color: ${pizzaColor};
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 6;
  p {
    margin: 0;
  }
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 5px #4a3b3b;
`;

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Logo>
        Woop Pizza{" "}
        <span role="img" aria-label="emoji">
          🍕
        </span>
      </Logo>
    </NavbarWrapper>
  );
}
