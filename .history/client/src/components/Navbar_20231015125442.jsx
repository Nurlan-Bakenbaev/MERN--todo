import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MERN
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton
            aria-label="account of current user"
            color="secondary">
            <AccountCircle fontSize="50px" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
