import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/registration" element={ <AuthPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
