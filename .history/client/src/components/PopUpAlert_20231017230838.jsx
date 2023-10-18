import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
xt";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
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
