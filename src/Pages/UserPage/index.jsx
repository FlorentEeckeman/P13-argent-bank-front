import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import Ticket from "../../Components/Ticket";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfos, setUserInfos } from "../../Utils/userInfos";
import { addUserInfos } from "../../Store/userSlice";
import { useForm } from "react-hook-form";

const UserPage = () => {
  const [edit, setEdit] = useState(false);
  const selector = useSelector((state) => state.user.userInfos);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const token = useSelector((state) => state.token.value);
  getUserInfos(token)
    .then((data) => {
      //console.log("token :" + token + " data : " + data);
      dispatch(addUserInfos(data));
    })
    .catch((err) => console.log(err));

  const formUserInfos = (data) => {
    dispatch(setUserInfos(token, data));
  };
  /*console.log(useSelector((state) => state));
  console.log(selector);
  console.log(useSelector((state) => state.token));
*/
  let button;
  if (edit === false) {
    button = <button onClick={() => setEdit(!edit)}>Edit Name</button>;
  } else {
  }
  return (
    <Div>
      <Header />
      <div className="user-main">
        <div className="user-main-header">
          <h1>
            Welcome back <br />
            {selector.firstName + " " + selector.lastName}
          </h1>
          {button}
          {edit && (
            <form onSubmit={handleSubmit(formUserInfos)}>
              <div className="user-edit">
                <div className="user-edit-name">
                  <input
                    placeholder="First name"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && alert("Please enter your first name")}
                  <input
                    placeholder="Last name"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && alert("please enter your last name")}
                </div>
                <div className="user-edit-button">
                  <button type="submit" onClick={handleSubmit}>
                    Save
                  </button>
                  <button onClick={() => setEdit(!edit)}>Cancel</button>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="user-main-transactions">
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
      <Footer />
    </Div>
  );
};

export default UserPage;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .user-main {
    flex: 1;
    background-color: #12002b;
    &-header {
      color: #fff;
      margin-bottom: 2rem;
      text-align: center;
      h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }
      button {
        border-color: #00bc77;
        background-color: #00bc77;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
      }
      .user-edit {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        &-name {
          display: flex;
          flex-direction: row;
          justify-content: center;
          column-gap: 15px;
          input {
            padding: 5px;
            font-size: 1.2rem;
            border: 2px solid #7a7a7a;
            border-radius: 3px;
          }
        }
        &-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          column-gap: 15px;
          button {
            width: 150px;
            border: 2px solid #00bc77;
            border-radius: 3px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
