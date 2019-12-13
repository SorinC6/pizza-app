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
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 5px #4a3b3b;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 15px;
  margin-right: 30px;

  @media (max-width: 450px) {
    span:first-child {
      display: none;
    }
  }
`;

const LoginButton = styled.span`
  cursor: pointer;
  margin-left: 20px;
`;

const Basket = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: 0.3s all;
  padding: 3px;
  span:first-child {
    font-size: 23px;
  }

  span:last-child {
    margin-left: 5px;
    color: white;
  }
  @media (min-width: 600px) {
    display: none;
  }
  &:hover {
    background-color: red;
  }
`;

export default function Navbar({
  login,
  loggedIn,
  logout,
  orders,
  setDisplayOrder,
  displayOrder
}) {
  return (
    <NavbarWrapper>
      <Logo>
        Woop Pizza{" "}
        <span role="img" aria-label="emoji">
          🍕
        </span>
      </Logo>
      <Basket
        onClick={() => {
          setDisplayOrder(!displayOrder);
        }}
      >
        <span role="img" aria-label="emoji">
          🛒
        </span>
        <span>{orders.length > 0 && `( ${orders.length} )`}</span>
      </Basket>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? (
              <>
                <span role="img" aria-label="emoji">
                  {" "}
                  👋 Hello {loggedIn.displayName}
                </span>
                <LoginButton onClick={logout}>- Log Out</LoginButton>
              </>
            ) : (
              <LoginButton onClick={login}>Login/Signup</LoginButton>
            )}
          </>
        ) : (
          "loading..."
        )}
      </UserStatus>
    </NavbarWrapper>
  );
}
