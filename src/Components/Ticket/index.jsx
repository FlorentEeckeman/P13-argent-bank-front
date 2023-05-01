import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <div className="ticket-content-wrapper">
        <h3 className="ticket-title">Argent Bank Checking</h3>
        <p className="ticket-amount">$2,082.79</p>
        <p className="ticket-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button
          className="transaction-button"
          onClick={() => navigate("/transaction")}
        >
          View transactions
        </button>
      </div>
    </Div>
  );
};

export default Ticket;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
  .ticket-content-wrapper {
    width: 100%;
    flex: 1;
    h3 {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: normal;
    }
    .ticket-amount {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
    }
    .ticket-amount-description {
      margin: 0;
    }
  }
  .cta {
    flex: 0;
    button {
      width: 100%;
      display: block;
      padding: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 1rem;
      border-color: #00bc77;
      background-color: #00bc77;
      color: #fff;
      cursor: pointer;
      @media (min-width: 720px) {
        width: 200px;
      }
    }
  }
`;
