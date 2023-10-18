import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logOut,isLogin } = useContext(AuthContext);
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
             {
             isLogin
             ? :
             }
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
