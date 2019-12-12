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
`;

const LoginButton = styled.span`
  cursor: pointer;
  margin-left: 20px;
`;

export default function Navbar({ login, loggedIn, logout }) {
  return (
    <NavbarWrapper>
      <Logo>
        Woop Pizza{" "}
        <span role="img" aria-label="emoji">
          🍕
        </span>
      </Logo>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? (
              <>
                <span> 👋 Hello {loggedIn.displayName}</span>
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
