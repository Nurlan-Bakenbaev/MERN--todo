const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.post("/add ,", async (req, res) => {
  try {
    const { text, userId } = req.body;
    const todo = await new Todo({
      text,
      owner: userId,
      completed: boolean,
      important: Boolean,
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
