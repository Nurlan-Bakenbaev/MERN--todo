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
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h5" component="div">
            MERN Todo App
          </Typography>
         <div className="absolut w-[100px] h-[100px] rounded-full bg-black">
          <img className="w-[100%]" src="" alt="Account logo" />
         </div>
        <Box  >
       <Link to="/registration"> <Button  color="inherit">Login</Button></Link>
          <IconButton
            aria-label="account of current user"
            color="secondary">
            <AccountCircle fontSize="50px" />
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
