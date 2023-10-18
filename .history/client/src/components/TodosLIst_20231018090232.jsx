import React from "react";

const TodosLIst = ({tasks}) => {
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
