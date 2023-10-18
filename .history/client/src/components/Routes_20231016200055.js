import { Router, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";

const Routes = (isLogin) => {
  const navigate = useNavigate();

  if (isLogin) {
    navigate("/");
  }else{}

  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
};

export default Routes;
