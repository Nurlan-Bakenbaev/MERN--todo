import React from "react";

const TodosLIst = () => {
  return (
   
    <Paper elevation={3}>
    <List>
      <ListItem>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 3" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 4" />
      </ListItem>
    </List>
  </Paper>
  );
};

export default TodosLIst;
