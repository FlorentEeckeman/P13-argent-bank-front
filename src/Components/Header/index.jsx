import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "./../../Assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import UserHome from "./UserHome";
import SignOut from "./SignOut";

const Header = () => {
  const userFirstName = useSelector((state) => state.user.userInfos.firstName);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  return (
    <Div>
      <div>
        <div
          className="header-logo"
          style={{ backgroundImage: `url(${logo})` }}
          alt="logo"
          onClick={() => navigate("/")}
        ></div>
      </div>
      <div className="header-right">
        {token.value !== null ? (
          <>
            <UserHome userFirstName={userFirstName} />
            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  .header-logo {
    height: 54px;
    width: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .header-right {
    display: flex;
    padding-right: 8px;
    column-gap: 15px;
    .header-right-signIn {
      display: flex;
      font-weight: 700;
      column-gap: 5px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
