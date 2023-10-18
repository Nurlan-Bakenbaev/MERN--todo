import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GradeIcon from "@mui/icons-material/Grade";
import DeleteIcon from "@mui/icons-material/Delete";

const Buttons = () => {
  return (
    <div className=" flex gap-2">
      <Button sx={{ backgroundColor: "lightgray" }}>
        <CheckCircleOutlineIcon sx={{fontSize:'15px'}} />
      </Button>
      <Button sx={{ backgroundColor: "#ffebb5", color: "orange" }}>
        <GradeIcon  sx={{fontSize:'12px'}}/>
      </Button>
      <Button sx={{ backgroundColor: "#ffe5e7", color: "red" }}>
        <DeleteIcon  sx={{fontSize:'12px'}}/>
      </Button>
    </div>
  );
};

export default Buttons;
