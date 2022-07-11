const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, Required: true },
  lastName: String,
  age: Number,
});
module.exports = mongoose.model("user", userSchema);
