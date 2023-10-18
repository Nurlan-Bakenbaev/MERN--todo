import { List, ListItem } from "@mui/material";
import React from "react";

const TodosLIst = ({task}) => {
  return (
   
    <Paper elevation={3}>
    <List>
      <ListItem>
        <ListItemText primary={task} />
      </ListItem>
    </List>
  </Paper>
  );
};

export default TodosLIst;
