import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [isLogin,setIsLogin]
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {if(isLogin)}
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
