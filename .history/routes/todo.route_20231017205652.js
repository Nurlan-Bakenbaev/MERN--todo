const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.post("/add ,", async (req, res) => {
  try {
    const { text, userId } = req.body;
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
