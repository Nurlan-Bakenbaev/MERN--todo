import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthContext} from ''
function App() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home isLogin={isLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
