const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const { check, validationResult } = require("express-validator");

router.post(
  "/registration",
  [
    check("email", "Invalid Email").isEmail(),
    check("password", "Incorrect password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if(errors.isEmpty()){
        return res.status(400).json
      }


      const { email, password } = req.body;
      // Check if the email is already in use
      const isUsed = await User.findOne({ email });
      if (isUsed) {
        return res.status(400).json({
          message: "This email is already in use",
        });
      }

      // Create a new user
      const user = new User({
        email,
        password,
      });

      // Save the user to the database
      await user.save();

      res.status(201).json({ message: "User has been created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  }
);

module.exports = router;
