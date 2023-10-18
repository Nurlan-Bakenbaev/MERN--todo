import { List, ListItem, ListItemText, Paper } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem sx={{ width: "300px" }}>
          <ListItemText primary={task} />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
