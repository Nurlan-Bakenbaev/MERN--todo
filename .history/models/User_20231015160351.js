import { Schema, Types, model } from "mongoose";

const scheme = new Schema({
    email:{}
})
module.exports = model("User",schema)
