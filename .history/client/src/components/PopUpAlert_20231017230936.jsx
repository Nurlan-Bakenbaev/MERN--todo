import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Task has to be at least 5 digits !"}</DialogTitle>
      </Dialog>
    </div>
  );
}
