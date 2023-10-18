import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GradeIcon from "@mui/icons-material/Grade";
import DeleteIcon from "@mui/icons-material/Delete";

const Buttons = () => {
  return (
    <div className=" flex gap-2">
      <Button sx={{ fontSize:'12' backgroundColor: "lightgray" }}>
        <CheckCircleOutlineIcon />
      </Button>
      <Button sx={{ fontSize:'12' backgroundColor: "#ffebb5", color: "orange" }}>
        <GradeIcon />
      </Button>
      <Button sx={{fontSize:'12'  backgroundColor: "#ffe5e7", color: "red" }}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default Buttons;
