import { Schema, Types, model } from "mongoose";

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos: { type: Types.ObjectId, ref: "Todo" },
});
export const User = model("User", schema);
