import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const isLogin = false
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Home />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
