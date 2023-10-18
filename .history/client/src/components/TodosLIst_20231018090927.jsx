import { List, ListItem, ListItemText, Paper } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText sx={{ width: "300px" }} primary={task} />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
