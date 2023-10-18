import { List, ListItem, ListItemText} from "@mui/material";

const TodosLIst = ({ task }) => {
  return (
    <>
      <List>
        <ListItem sx={{display:'flex', flexWrap}}>
          <ListItemText sx={{ width: "200px"}} primary={task} />
        </ListItem>
      </List>
    </>
  );
};

export default TodosLIst;
