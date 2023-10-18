const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 4000;
const authRouter = require("./routes/auth.route");
app.use("/api/auth", authRouter);
app.use(express.json());
async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://nurlan:04121991@database.l7faqwy.mongodb.net/todoapp?retryWrites=true&w=majority"
    );
    console.log("mongo DB is working");
    app.listen(PORT, () => {
      console.log(`Server on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
