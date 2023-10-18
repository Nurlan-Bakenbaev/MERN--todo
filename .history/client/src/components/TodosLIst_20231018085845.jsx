import React from 'react'

const TodosLIst = () => {
  return (
    <Paper elevation={3}>
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Paper>
  )
}

export default TodosLIst