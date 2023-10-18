import { Schema, Types, model } from "mongoose";

const scheme = new Schema({
    email:{Type:String,req}
})
module.exports = model("User",schema)
