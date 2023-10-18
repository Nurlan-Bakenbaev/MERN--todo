import { Router, Route,redirect } from "react-router-dom";
import Home from "../pages/Home";
const Routes = (isLogin) => {
  if (isLogin) {
    return (
      <Router>
        <Route path="/" element={<Home />} />

      </Router>
    );
  }
};

export default Routes;
