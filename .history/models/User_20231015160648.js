import { Schema, Types, model } from "mongoose";

const scheme = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    Type: String,
    required: true,
  },
  todos:({})
});
module.exports = model("User", schema);
