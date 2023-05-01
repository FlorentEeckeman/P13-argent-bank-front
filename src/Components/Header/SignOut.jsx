import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeUserInfos } from "../../Feature/userInfoSlice";
import { removeToken } from "../../Feature/counterSlice";

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataReturn = useSelector((state) => state);
  const logout = () => {
    dispatch(removeToken());
    dispatch(removeUserInfos());
    console.log("test logout");
    console.log(dataReturn);
    navigate("/");
  };

  return (
    <Div className="header-right-signIn" onClick={() => logout()}>
      <div>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
      <div className="header-right-signIn-text">Sign Out</div>
    </Div>
  );
};

export default SignOut;

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
