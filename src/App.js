import Home from "./Pages/Home";
import styled from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import SignIn from "./Pages/Sign-In";
import UserPage from "./Pages/UserPage";
import Error from "./Pages/Error";
import Transaction from "./Pages/Transaction";
import PrivateRoutes from "./Utils/PrivateRoutes";
import { setAuthToken } from "./Utils/SetAuthToken";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.token.value);
  if (token) {
    setAuthToken(token);
  }
  return (
    <Div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="*" element={<Error />} />
        <Route element={<PrivateRoutes />}>
          <Route path="profile" element={<UserPage />} />
          <Route path="transaction/" element={<Transaction />} />
        </Route>
      </Routes>
    </Div>
  );
}

export default App;
const Div = styled.div`
  height: 100%;
`;
