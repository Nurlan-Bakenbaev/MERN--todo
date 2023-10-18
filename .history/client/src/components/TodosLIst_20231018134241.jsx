import { List, ListItem, ListItemText } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem sx={{}}>
          <ListItemText
            sx={{ maxWidth: "380px", overflowWrap: "break-word" }}
            primary={task}
          />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
