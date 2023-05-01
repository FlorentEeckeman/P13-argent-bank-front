import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Div className="header-right-signIn" onClick={() => navigate("/login")}>
      <div>
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
      <div className="header-right-signIn-text">Sign In</div>
    </Div>
  );
};

export default SignIn;

const Div = styled.div`
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
`;
