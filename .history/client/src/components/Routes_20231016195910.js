import { Router, Route,Redirect } from "react-router-dom";
import Home from "../pages/Home";
const Routes = (isLogin) => {
  if (isLogin) {
    return (
      <Router>
        <Route path="/" element={<Home />} />
        <Redirect to/>
      </Router>
    );
  }
};

export default Routes;
