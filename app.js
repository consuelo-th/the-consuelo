require("./database/connection");
const express = require("express");
const app = express();
const usersRoutes = require("./routes/user");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());

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
  res.render("pages/errorPages/404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
