import { Router } from "express";

const router = Router();
import { User } from "../models/User.js";

router.post("/registration", async (req, res) => {
  try {
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
});

import { Router } from "express";

const router = Router();
import { User } from "../models/User.js";

router.post("/registration", async (req, res) => {
  try {
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
});

export 

