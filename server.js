const express = require("express");
const app = express();
const logger = require("morgan");
const favicon = require("serve-favicon");
const path = require("path");
//dotenv helps us use the env files,SECRET keyword
require("dotenv").config();
//is database mongoose
require("./config/database");

app.use(logger("dev"));
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

//check if token and create req.user
app.use(require("./config/checkToken"));
// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
//~~~~~~~~~~INSERT ROUTES HERE~~~~~~~~~~~~
// const ensuredLoggedIn = require("./config/ensureLoggedIn");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port} this is chatter app`);
});
