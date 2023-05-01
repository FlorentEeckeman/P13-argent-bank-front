import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import bankTree from "../../Assets/img/bank-tree.jpeg";
import FeatureIcon from "../../Components/FeatureIcon";
import iconChat from "../../Assets/img/icon-chat.png";
import iconMoney from "../../Assets/img/icon-money.png";
import iconSecurity from "../../Assets/img/icon-security.png";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((state) => state);
  console.log(selector);
  return (
    <Div>
      <Header />
      <div className="home">
        <div className="home-top">
          <div
            className="home-top-wallpaper"
            style={{ backgroundImage: `url(${bankTree})` }}
            alt="wallpaper"
          ></div>

          <div className="home-top-legend">
            <h2>
              No fees.
              <br />
              No minimum deposit.
              <br />
              High interest rates.
            </h2>
            <p>Open a savings account with Argent Bank today!</p>
          </div>
        </div>
        <div className="home-bottom">
          <div className="home-bottom-feature">
            <FeatureIcon img={iconChat} />
            <div className="home-bottom-feature-text">
              <h3>You are our #1 priority</h3>
              <p>
                Need to talk to a representative? You can get in touch through
                our 24/7 chat or through a phone call in less than 5 minutes.
              </p>
            </div>
          </div>
          <div className="home-bottom-feature">
            <FeatureIcon img={iconMoney} />
            <div className="home-bottom-feature-text">
              <h3>More savings means higher rates</h3>
              <p>
                The more you save with us, the higher your interest rate will
                be!
              </p>
            </div>
          </div>
          <div className="home-bottom-feature">
            <FeatureIcon img={iconSecurity} />
            <div className="home-bottom-feature-text">
              <h3>Security you can trust</h3>
              <p>
                We use top of the line encryption to make sure your data and
                money is always safe.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Div>
  );
};

export default Home;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .home {
    flex: 1;
    display: flex;
    flex-direction: column;
    &-top {
      height: 400px;
      &-wallpaper {
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0% 33%;
      }
      &-legend {
        position: absolute;
        top: 110px;
        right: 50px;
        width: 300px;
        margin: 2rem;
        background: white;
        padding: 2rem;
        text-align: left;
        color: #2c3e50;

        h2 {
          margin: 0;
          font-family: "Helvetica";
        }
        p {
          font-size: 1.2rem;
          font-family: "Helvetica";
          margin-bottom: 0;
        }
      }
    }
    &-bottom {
      display: flex;
      flex: 1;
      align-items: center;
      &-feature {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2.5rem;
        text-align: center;
        &-text {
          flex: 1;
          font-family: "Helvetica";
          h2 {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`;
