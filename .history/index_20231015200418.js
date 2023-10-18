import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";

const app = express();
const PORT = 4000;
app.use(express.json());
app.use("api/auth", require("./routes/auth.route"));

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://nurlan:@database.l7faqwy.mongodb.net/?retryWrites=true&w=majority"
     );

    app.listen(PORT, () => {
      console.log(`Server on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
