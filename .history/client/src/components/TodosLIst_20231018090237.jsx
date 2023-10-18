import React from "react";

const TodosLIst = ({task}) => {
  return (
   
    <Paper elevation={3}>
    <List>
      <ListItem>
        <ListItemText primary={tasks} />
      </ListItem>
    </List>
  </Paper>
  );
};

export default TodosLIst;
