import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";

const Transaction = () => {
  return (
    <Div>
      <Header />
      <div className="trans">
        <div className="trans-header">
          <p>Argent Bank Checking </p>
          <h1>2,082.79</h1>
          <p className="trans-header-text">Available Balance</p>
        </div>
        <div className="trans-main">
          <div className="trans-main-table">
            <div className="trans-main-table-header"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Div>
  );
};

export default Transaction;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .trans {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    &-header {
      display: flex;
      flex-direction: column;
      text-align: center;
      border: 2px solid #c7c7c7;
      border-radius: 4px;
      h1 {
        margin: 0;
      }
      &-text {
        margin-top: 8px;
        margin-bottom: 24px;
        font-size: 15px;
      }
    }
    &-main {
      flex: 1;
      background-color: #12002b;
    }
  }
`;
