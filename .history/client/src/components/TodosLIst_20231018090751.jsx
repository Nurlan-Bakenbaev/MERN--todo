import { List, ListItem, ListItemText, Paper } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem className="task-item">
          <ListItemText primary={task} />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
