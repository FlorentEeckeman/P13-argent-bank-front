import axios from "axios";
import { setAuthToken } from "./SetAuthToken";

export const handleSubmitForm = async (username, pass) => {
  const loginPayload = {
    email: username,
    password: pass,
  };
  const res = await axios
    .post("http://localhost:3001/api/v1/user/login", loginPayload)
    .then((response) => {
      //get token from response
      const token = response.data.body.token;
      setAuthToken(token);
      return response.data.body.token;
    })
    .catch((err) => console.log(err));
  return res;
};
