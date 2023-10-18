import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(false); // Set this to true or false based on your condition

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home isLogin={isLogin} />} />}
      </Routes>
    </Router>
  );
}

export default App;
