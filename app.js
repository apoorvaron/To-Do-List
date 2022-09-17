//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const data = require(__dirname + "/data.js");
const app = express();
// console.log(data);
// console.log(data());
var items = ["Data Structures", "Leetcode Ques", "GFG Ques"];
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  let day = data.getDay();
  res.render("lists", { kindOfDay: day, listItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
