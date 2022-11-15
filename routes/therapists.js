const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("pages/th/login");
});

router.get("/register", (req, res) => {
  res.render("pages/th/register");
});

router.get("/dashboard", (req, res) => {
  res.render("pages/th/dashboard");
});

router.get("/appointments", (req, res) => {
  res.render("pages/th/appointments");
});

router.get("/patients", (req, res) => {
  res.render("pages/th/patients");
});

router.get("/calendar", (req, res) => {
  res.render("pages/th/calendar");
  
});

router.get("/chat", (req, res) => {
  res.render("pages/th/chat");
});
router.get("/profile", (req, res) => {
  res.render("pages/th/profile");
});

module.exports = router;
