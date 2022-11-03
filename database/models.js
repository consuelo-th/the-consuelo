const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: { type: Boolean, default: false },
  verified: { type: Boolean, default: false },
  //an array of saved affirmation cards ID
  savedCardsId: [{ type: String }],
});

const affirmationSchema = new mongoose.Schema({
  text: String,
});

const mentalHealthTipSchema = new mongoose.Schema({
  title: String,
  image_url: String,
  body: String,
  description: String,
});

const User = mongoose.model("User", userSchema);
const Affirmation = mongoose.model("Affirmation", affirmationSchema);
const MentalHealthTips = mongoose.model(
  "Mental Health Tip",
  mentalHealthTipSchema
);

module.exports = {
  User,
  Affirmation,
  MentalHealthTips,
};
