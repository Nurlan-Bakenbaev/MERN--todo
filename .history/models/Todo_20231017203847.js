const mongoose = require("mongoose");
const { Schema, Types, model } = mongoose;

const schema = new Schema({
 owner:{type:Types.ObjectId,ref:'User'},
 text:{type:String},
 completed:false,
 im
});

module.exports = model("User", schema);
