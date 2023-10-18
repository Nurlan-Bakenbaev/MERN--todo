import { List, ListItem, ListItemText } from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem sx={{ width: "100%" }}>
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
