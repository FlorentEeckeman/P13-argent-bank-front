import React from "react";
import styled from "styled-components";

const FeatureIcon = ({ img }) => {
  return (
    <Div>
      <div style={{ backgroundImage: `url(${img})` }}></div>
    </Div>
  );
};

export default FeatureIcon;

const Div = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
  div {
    background-size: 100px, 100px;
    background-repeat: no-repeat;
    aspect-ratio: 1 / 1;
  }
`;
