const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.post("/add", async (req, res) => {
  try {
    const { text, userId, completed, important } = req.body; // Destructure `completed` and `important` from req.body

    const todo = new Todo({
      text,
      owner: userId,
      completed, // Use the `completed` value from the request body
      important, // Use the `important` value from the request body
    });

    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error(error); // Use console.error to log errors
    res.status(500).json({ error: "An error occurred" }); // Send an error response to the client
  }
});

module.exports = router;
