import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GradeIcon from "@mui/icons-material/Grade";
import DeleteIcon from "@mui/icons-material/Delete";

const Buttons = ({ onClick, itemId,completed }) => {
  return (
    <div className=" flex gap-2">
      <Button
       onClick={() => completed(itemId)}
       sx={{ backgroundColor: "lightgray" }}>
        <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
      </Button>
      <Button sx={{ backgroundColor: "#ffebb5", color: "orange" }}>
        <GradeIcon sx={{ fontSize: "18px" }} />
      </Button>
      <Button
        onClick={() => onClick(itemId)}
        sx={{ backgroundColor: "#ffe5e7", color: "red" }}
      >
        <DeleteIcon sx={{ fontSize: "18px" }} />
      </Button>
    </div>
  );
};

export default Buttons;
