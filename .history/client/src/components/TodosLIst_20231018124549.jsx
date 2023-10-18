import { List, ListItem, ListItemText } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText sx={{maxWidth}} primary={task} />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
