require("./database/connection");
const express = require("express");
const app = express();
const usersRoutes = require("./routes/user");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

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

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/design", (req, res) => {
  res.render("pages/design");
});

app.use((req, res) => {
  res.render("pages/templates/404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
