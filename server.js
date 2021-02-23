// Required Modules
const express = require("express");
const rowdy = require("rowdy-logger");
const db = require("./models");
const ejslayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

// Variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(ejslayouts);
app.use("/dinos", require("./controllers/dinosController"));
// Middleware
app.use(express.urlencoded({ extended: false }));
// urlencoded gets the form data from the request and puts it inside of
// req.body
app.use(methodOverride("_method"));
// Routes
app.get("/", (req, res) => {
  res.render("index", {
    name: "Louisa",
    friends: ["harry", "larry", "moe", "smurfy"],
  });
});

app.get("/anotherpage", (req, res) => {
  res.render("anotherpage");
});

// Start the server!
app.listen(PORT, () => {
  rowdyResults.print();
  console.log(`Server is listening on port ${PORT}`);
});
