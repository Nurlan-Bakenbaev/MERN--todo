import { Button } from "@mui/material";
import React from "react";

const Buttons = () => {
  return (
    <div className=" flex gap-2">
      <Button sx={{ backgroundColor: "lightgray" }}>
        <CheckCircleOutlineIcon />
      </Button>
      <Button sx={{ backgroundColor: "#ffebb5", color: "orange" }}>
        <GradeIcon />
      </Button>
      <Button sx={{ backgroundColor: "#ffe5e7", color: "red" }}>
        <DeleteIco />
      </Button>
    </div>
  );
};

export default Buttons;
