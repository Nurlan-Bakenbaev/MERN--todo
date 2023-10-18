const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.post("/add", async (req, res) => {
  try {
    const { text, userId, completed, important } = req.body; 

    const todo = new Todo({
      text,
      owner: userId,
      completed, 
      important, 
    });

    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: "An error occurred" }); 
  }
});

router.get("/", async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
})
module.exports = router;
