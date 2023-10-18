const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 4000;
app.use(express.json());
app.use("/api/auth", require("./routes/auth.route"));

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://nurlan:04121991@database.l7faqwy.mongodb.net/todoapp?retryWrites=true&w=majority"
    );
      console.log("mongo DB is working")
    app.listen(PORT, () => {
      console.log(`Server on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
