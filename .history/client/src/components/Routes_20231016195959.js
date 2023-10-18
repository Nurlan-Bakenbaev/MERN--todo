import { Router, Route, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = (isLogin) => {
  const navigate = useNavigate(); // Import and use the useNavigate hook

  if (isLogin) {
    navigate('/'); // Programmatically navigate to the Home page
  }

  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
};

export default Routes;
