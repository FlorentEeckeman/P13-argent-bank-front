import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <p>Copyright 2020 Argent Bank</p>
    </Div>
  );
};

export default Footer;
const Div = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
  height: 18px;
  p {
    margin: 0;
    padding: 0;
  }
`;
