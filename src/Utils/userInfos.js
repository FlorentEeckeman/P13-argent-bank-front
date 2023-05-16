import axios from "axios";

export const getUserInfos = async (token) => {
  const loginPayload = {
    Authorization: "Bearer " + token,
  };
  const res = await axios
    .post(" http://localhost:3001/api/v1/user/profile", loginPayload)
    .then((response) => {
      return response.data.body;
    })
    .catch((err) => console.log(err));
  return res;
};

export const setUserInfos = async (token, data) => {
  const infoPayload = {
    method: "put",
    url: "http://localhost:3001/api/v1/user/profile",
    Authorization: "Bearer " + token,
    data: { firstName: data.firstName, lastName: data.lastName },
  };

  const res = await axios(infoPayload)
    .then((response) => {
      console.log(response);
      return response.data.body;
    })
    .catch((err) => console.log(err));
  return res;
};
