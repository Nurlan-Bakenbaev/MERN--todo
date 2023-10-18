import { List, ListItem, ListItemText, Paper } from "@mui/material";

const TodosLIst = ({task}) => {
  return (
   
    <Paper elevation={3}>
    <List>
      <ListItem>
        <ListItemText sx={{width}} primary={task} />
      </ListItem>
    </List>
  </Paper>
  );
};

export default TodosLIst;
