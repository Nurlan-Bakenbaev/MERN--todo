import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";

const app = express();
const PORT = 5000;

mongoose
  .connect(
     )
  .then(() => console.log("MONGO CONNECTED"))
  .catch((err) => console.log(err));