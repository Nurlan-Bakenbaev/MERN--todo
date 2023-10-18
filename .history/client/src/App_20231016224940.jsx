import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const { login, logOut, token, userId, isReady } = useAuth;
  const isLogin
  return (
    <AuthContext.Provider value={(login, logOut, token, userId, isReady)}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home isLogin={isLogin} />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
