const express = require("express");
const router = express.Router();
//home, self-affirmation, mental-health-tips, forum, blog, feedback

router.get("/home", (req, res) => {
  res.render("pages/admin/home");
});

router.get("/self-affirmation", (req, res) => {
  res.render("pages/admin/self-affirmation");
});

router.get("/mental-health-tips", (req, res) => {
  res.render("pages/admin/mental-health-tips");
});

router.get("/forum", (req, res) => {
  res.render("pages/admin/forum");
});

router.get("/blog", (req, res) => {
  res.render("pages/admin/blog");
});

router.get("/feedback", (req, res) => {
  res.render("pages/admin/feedback");
});

router.get("/login", (req, res) => {
  res.render("pages/admin/login");
});

module.exports = router;
