import { Schema, Types, model } from "mongoose";

const scheme = new Schema({
    email:{Type:String,}
})
module.exports = model("User",schema)
