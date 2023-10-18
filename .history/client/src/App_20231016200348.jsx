import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const isLogin = true;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {isLogin ? <Route path="/home" element={<Home/>} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
