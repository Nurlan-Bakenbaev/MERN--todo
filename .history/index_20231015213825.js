const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 4000;
const authRouter = require("./routes/auth.route");
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Define the HTTP methods you want to allow
  optionsSuccessStatus: 204, // An HTTP status code to send for successful options requests
}))
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
