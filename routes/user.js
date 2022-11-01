const express = require("express");
const router = express.Router();
const User = require("../database/models").User;

router.get("/register", (req, res) => {
  res.render("pages/users/register");
});

router.get("/login", (req, res) => {
  res.render("pages/users/login");
});

router.get("/reset", (req, res) => {
  res.render("pages/users/reset");
});

router.get("/dashboard", (req, res) => {
  res.render("pages/users/dashboard");
});

//TODO encrypt passwords
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      //frontend needs to display the error somewhere
      //the formdata is for filling back the input fields(page reloads after submission)
      res.render("pages/users/register", {
        error: "Email already exist",
        formData: req.body,
      });
    } else {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
      });
      newUser.save((err, newUserDoc) => {
        if (err) {
          //server error
          //frontend needs to display the error somewhere
          //the formdata is for filling back the input fields(page reloads after submission)
          res.render("pages/users/register", {
            error: "something went wrong please try again",
            formData: req.body,
          });
        } else {
          //user saved
          //redirect to homepage
          res.redirect("/user/dashboard");
        }
      });
    }
  } else {
    //frontend needs to display the error somewhere
    //the formdata is for filling back the input fields(page reloads after submission)
    res.render("pages/users/register", {
      error: "All input fields must be filled",
      formData: req.body,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    if (user.password === password) {
      //valid details
      res.redirect("/user/dashboard");
    } else {
      //wrong password
      res.render("pages/users/login", {
        error: "Invalid email or password",
        formData: req.body,
      });
    }
  } else {
    //no record with the submitted email
    res.render("pages/users/login", {
      error: "Invalid email or password",
      formData: req.body,
    });
  }
});

module.exports = router;
