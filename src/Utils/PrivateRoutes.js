import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: useSelector((state) => state.token) };
  return auth.token.value ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
