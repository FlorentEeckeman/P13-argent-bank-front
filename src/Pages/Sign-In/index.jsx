import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { handleSubmitForm } from "../../Utils/Login";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../Store/tokenSlice";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.token);
  const onSubmit = async (data) => {
    await handleSubmitForm(data.username, data.password)
      .then((token) => {
        dispatch(addToken(token));
        navigate("/profile");
      })
      .then(() => console.log(selector))
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate();
  console.log(watch("username"));
  return (
    <Div>
      <Header />
      <div className="signIn-main">
        <div className="signIn-form">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="signIn-form-label">Username </label>
              <input
                className="signIn-form-input"
                {...register("username", { required: true })}
              />
              {errors.username && <span>This field is required</span>}
            </div>{" "}
            <div>
              <label className="signIn-form-label">Password </label>
              <input
                className="signIn-form-input"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>{" "}
            <div className="signIn-form-checkbox">
              <input
                className="signIn-form-checkbox-inputCheck"
                type="checkbox"
              />
              <label className="signIn-form-checkbox-labelCheck">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <input
              className="signIn-form-inputButton"
              type="submit"
              value="Sign In"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
      <Footer />
    </Div>
  );
};

export default SignIn;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .signIn-main {
    flex: 1;
    background-color: #12002b;
    .signIn-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      background-color: white;
      width: 300px;
      margin: 0 auto;
      margin-top: 3rem;
      padding: 2rem;
      h1 {
        font-size: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
      }
      form {
        width: 100%;
        div {
          display: flex;
          flex-direction: column;
          text-align: left;
          margin-bottom: 1rem;

          .signIn-form-label {
            font-size: 17px;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
          }
          .signIn-form-input {
            padding: 5px;
            font-size: 1.2rem;
          }
        }
        .signIn-form-checkbox {
          display: flex;
          flex-direction: row;
          &-inputCheck {
            box-sizing: border-box;
            margin: 3px 3px 3px 4px;
          }
          &-labelCheck {
            margin-left: 0.25rem;
          }
        }
      }
      .signIn-form-inputButton {
        display: block;
        width: 100%;
        padding: 8px;
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 1rem;
        background-color: #00bc77;
        color: #fff;
        border-style: hidden;
        cursor: pointer;
      }
    }
  }
`;
