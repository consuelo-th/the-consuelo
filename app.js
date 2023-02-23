require("./database/connection");
const express = require("express");
const app = express();
const usersRoutes = require("./routes/user");
const therapistsRouter = require("./routes/therapists");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const { waitList } = require("./database/models");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  sessions({
    secret: "donttellanyone",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  })
);
app.use(cookieParser());
// parse incoming post request's body
app.use(express.urlencoded({ extended: false }));
app.use("/user", usersRoutes);
app.use("/th", therapistsRouter);

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/design", (req, res) => {
  res.render("pages/design");
});

//render the landing pages

app.get("/about", (req, res) => {
  res.render("pages/landing-page/about-us");
});

app.get("/blog", (req, res) => {
  res.render("pages/landing-page/blog-post");
});

app.get("/list", (req, res) => {
  res.render("pages/waiting-list");
});

app.post("/list", async (req, res) => {
  let { email } = req.body;
  email = email.toLowerCase();

  if (email) {
    const emailExists = await waitList.findOne({ email });
    if (emailExists) {
      //frontend needs to display the error somewhere
      //the formdata is for filling back the input fields(page reloads after submission)
      res.render("pages/waiting-list", { error: "email already exists" });
    } else {
      const newEmail = new waitList({ email });
      newEmail.save((err) => {
        if (err) {
          //server error
          //frontend needs to display the error somewhere
          //the formdata is for filling back the input fields(page reloads after submission)
          res.redirect("pages/waiting-list", {
            error: "something went wrong please try again",
          });
        } else {
          console.log("success");
        }
      });
    }
  }
});

app.use((req, res) => {
  res.render("templates/404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
