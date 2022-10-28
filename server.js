require("./database/connection");
const express = require("express");
const path = require("path");
const app = express();
const usersRoutes = require("./routes/usersRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.set("view engine", "ejs");

//seperated routes
app.use("/users", usersRoutes);
app.use("/admin", adminRoutes);

app.use((req, res) => {
  res.render("errorPages/404");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
