import { List, ListItem, ListItemText, Paper } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
      <ListItem className="task-item">
          <ListItemText primary="Task 1" />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
