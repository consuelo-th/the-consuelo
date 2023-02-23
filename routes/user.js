require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../database/models").User;
const MentalHealthTip = require("../database/models").MentalHealthTip;
const Blog = require("../database/models").blog;
let session;
//GOOGLE
const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);
//

//GET REQUESTS
router.get("/register", (req, res) => {
  session = req.session;
  if (session.userID) {
    res.redirect("/user/home");
  } else {
    res.render("pages/users/register");
  }
});

router.get("/login", (req, res) => {
  session = req.session;
  if (session.userID) {
    res.redirect("/user/home");
  } else {
    res.render("pages/users/login");
  }
});

router.get("/reset", (req, res) => {
  res.render("pages/users/reset");
});

router.get("/home", async (req, res) => {
  session = req.session;
  if (session.userID) {
    //get all the users details excluding the
    //password, admin status, savedCards and email
    const userDetails = await User.findOne(
      { _id: session.userID },
      { password: 0, admin: 0, savedCardsId: 0, email: 0 }
    );
    res.render("pages/users/home", {
      userDetails,
    });
  } else {
    res.redirect("/user/login");
  }
});

router.get("/self-affirmation", async (req, res) => {
  session = req.session;
  if (session.userID) {
    //get all the users details excluding the
    //password, admin status, savedCards and email
    const userDetails = await User.findOne(
      { _id: session.userID },
      { password: 0, admin: 0, savedCardsId: 0, email: 0 }
    );
    res.render("pages/users/self-affirmation", {
      userDetails,
    });
  } else {
    res.redirect("/user/login");
  }
});

router.get("/mental-health-tips", async (req, res) => {
  session = req.session;
  if (session.userID) {
    //get all the users details excluding the
    //password, admin status, savedCards and email
    const userDetails = await User.findOne(
      { _id: session.userID },
      { password: 0, admin: 0, savedCardsId: 0, email: 0 }
    );
    res.render("pages/users/mental-health-tips", {
      userDetails,
    });
  } else {
    res.redirect("/user/login");
  }
});

router.get("/forum", async (req, res) => {
  session = req.session;
  if (session.userID) {
    //get all the users details excluding the
    //password, admin status, savedCards and email
    const userDetails = await User.findOne(
      { _id: session.userID },
      { password: 0, admin: 0, savedCardsId: 0, email: 0 }
    );
    res.render("pages/users/forum", {
      userDetails,
    });
  } else {
    res.redirect("/user/login");
  }
});

router.get("/music", (req, res) => {
  res.render("pages/users/music");
});

router.get("/blog", async (req, res) => {
  session = req.session;
  if (session.userID) {
    //get all the users details excluding the
    //password, admin status, savedCards and email
    const userDetails = await User.findOne(
      { _id: session.userID },
      { password: 0, admin: 0, savedCardsId: 0, email: 0 }
    );
    const blogPosts = await Blog.find();

    //this should be in the ejs file
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    res.render("pages/users/blog", { userDetails, blogPosts, months });
  } else {
    res.redirect("/user/login");
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blogItem = await Blog.findById(req.params.id);
    if (blogItem) {
      res.render("templates/blog", { blogItem }); //the page that'll display a single blog post
    } else {
      //the ID Is invalid too
    }
  } catch (error) {
    // ID in the request is invalid, an error page here
  }
});

router.get("/meet-a-therapist", (req, res) => {
  res.render("pages/users/meet-a-therapist");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/user/login");
});

//POST REQUESTS
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
          session = req.session;
          session.userID = newUserDoc._id;
          res.redirect("/user/home");
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
      //comparing the hashed password with the submitted password
      if (await bcrypt.compare(password, user.password)) {
        //valid details
        session = req.session;
        session.userID = user._id;
        res.redirect("/user/home");
      } else {
        //no record with the submitted email
        res.render("pages/users/login", {
          error: "Invalid email or password",
          formData: req.body,
        });
      }
    } else {
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

router.post("/google-login", (req, res) => {
  let token = req.body.token;
  handleGoogleAuth(token, "login", res, req);
});

router.post("/google-register", (req, res) => {
  let token = req.body.token;
  handleGoogleAuth(token, "register", res, req);
});

function handleGoogleAuth(token, operation, res, req) {
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (
      payload.aud === CLIENT_ID &&
      (payload.iss === "accounts.google.com" ||
        payload.iss === "https://accounts.google.com") &&
      payload.exp > Date.now() / 1000
    ) {
      if (operation === "register") {
        const googleAccountIdExist = await User.findOne({
          googleAccountId: payload.sub,
        });
        if (googleAccountIdExist) {
          res.json({
            success: false,
            message:
              "Sorry, it looks like you already have an account with us. " +
              "Please log in",
          });
        } else {
          const newUser = new User({
            firstName: payload.given_name,
            lastName: payload.family_name,
            email: payload.email,
            profileImageUrl: payload.picture,
            googleAccountId: payload.sub,
          });
          newUser.save((err, newUserDoc) => {
            if (err) {
              res.json({
                success: false,
                message: "something went wrong, please try again",
              });
            } else {
              session = req.session;
              session.userID = newUserDoc._id;
              res.json({ success: true, redirectUrl: "/user/home" });
            }
          });
        }
      } else {
        const user = await User.findOne({
          googleAccountId: payload.sub,
        });
        if (user) {
          session = req.session;
          session.userID = user._id;
          res.json({ success: true, redirectUrl: "/user/home" });
        } else {
          res.json({
            success: false,
            message:
              "Sorry, we couldn't find an account associated with your Google account. " +
              "Please sign up to create an account before you can log in.",
          });
        }
      }
    } else {
      //either malicious, or the token has expired
      // TODO
    }
  }
  verify().catch((err) => {
    if (err) {
      //to be displayed on frontend
      console.log(err);
    }
  });
}

module.exports = router;
