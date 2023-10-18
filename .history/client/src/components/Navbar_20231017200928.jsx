import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logOut, isLogin } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" component="div">
            <Link to={"/home"}>MERN</Link>
          </Typography>
          <Typography component="div">Todo App</Typography>
          <Box>
            <Link to="/login">
              {!isLogin ? (
                <Button
                  sx={{
                    color: "white",
                    padding: "5px 15px 5px 15px",
                    fontWeight: "bolder",
                  }}
                >
                  Login
                </Button>
              ) : (
                <Button
                  onClick={logOut}
                  sx={{
                    color: "white",
                    padding: "5px 15px 5px 15px",
                    fontWeight: "bolder",
                  }}
                >
                  Sign Out
                </Button>
              )}
            </Link>
            <Typography></Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
