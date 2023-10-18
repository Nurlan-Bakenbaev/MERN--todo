import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";

const app = express();
const PORT = 4000;

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/MernToDo?retryWrites=true&w=majority"
    );

    app.listen(PORT, (req,res) => {
     res.status
      console.log(`Server on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
