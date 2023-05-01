import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: useSelector((state) => state.token) };
  //console.log(auth.token);
  return auth.token.value !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
