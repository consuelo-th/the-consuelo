const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: { type: Boolean, default: false },
  verified: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
