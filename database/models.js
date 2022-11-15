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
  profileImageUrl: { type: String, default: "default-image" },
  notifications: [{ read: { type: Boolean, default: false }, content: String }],
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

const forumSchema = new mongoose.Schema({
  author: String,
  datePosted: Date,
  content: String,
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
});

const forumCommentSchema = new mongoose.Schema({
  postID: String,
  authorID: String,
  comment: String,
});

const blogSchema = new mongoose.Schema({
  title: String,
  datePosted: Date,
  readTime: String,
  author: String,
  content: String,
});

const User = mongoose.model("User", userSchema);
const Affirmation = mongoose.model("Affirmation", affirmationSchema);
const MentalHealthTip = mongoose.model(
  "Mental Health Tip",
  mentalHealthTipSchema
);
const forum = mongoose.model("Forum", forumSchema);
const forumComment = mongoose.model("Forum comments", forumCommentSchema);
const blog = mongoose.model("blog", blogSchema);

module.exports = {
  User,
  Affirmation,
  MentalHealthTip,
  forum,
  forumComment,
  blog,
};
