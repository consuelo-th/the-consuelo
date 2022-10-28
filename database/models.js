const mongoose = require("mongoose");

//the schemas i.e users table with firstname, lastname column

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
