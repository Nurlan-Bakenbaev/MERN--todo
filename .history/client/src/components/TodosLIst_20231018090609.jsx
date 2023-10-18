import { List, ListItem, ListItemText, Paper } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <Paper elevation={2}>
      <List>
        <ListItem>
          <ListItemText primary={task} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default TodosLIst;
