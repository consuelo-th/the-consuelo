const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
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
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
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

  if (email !== "" && password !== "") {
    const user = await User.findOne({ email });

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
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
  } else {
    res.render("pages/users/login", {
      error: "All input fields must be filled",
      formData: req.body,
    });
  }
});

router.get("/home", (req, res) => {});

router.get("/self-affirmation", (req, res) => {});
router.get("/mental-health-tips", (req, res) => {});
router.get("/forum", (req, res) => {});
router.get("/blog", (req, res) => {});
router.get("/logout", (req, res) => {});

module.exports = router;
