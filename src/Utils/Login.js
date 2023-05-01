import axios from "axios";
import { setAuthToken } from "./SetAuthToken";
import { Navigate, redirect } from "react-router-dom";

export const handleSubmitForm = async (username, pass) => {
  //reqres registered sample user

  const loginPayload = {
    email: username,
    password: pass,
  };

  const res = await axios
    .post("http://localhost:3001/api/v1/user/login", loginPayload)
    .then((response) => {
      //get token from response
      const token = response.data.body.token;
      //set JWT token to local
      //set token to axios common header
      setAuthToken(token);

      //redirect user to home page
      //window.location.href = "/profile";

      return response.data.body.token;
    })
    .catch((err) => console.log(err));
  return res;
};
