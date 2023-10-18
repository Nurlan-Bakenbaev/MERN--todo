import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" component="div">
          <Link to={"/home"}>import React, { useState } from "react";
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
        {!isLogin ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/home" element={<Home />} />
        )}
        <Route path="/registration" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
</Link>
          </Typography>
          <Typography component="div">Todo App</Typography>
          <Box>
            <Link to="/registration">
              <Button
                sx={{
                  color: "white",
                  padding: "5px 15px 5px 15px",
                  fontWeight: "bolder",
                }}
              >
                Login
              </Button>
            </Link>
            <IconButton aria-label="account of current user" color="secondary">
              <AccountCircle fontSize="50px" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
