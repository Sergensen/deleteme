const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

const users = {
  michel: { name: "Michel", age: 30 },
  sergen: { name: "Sergen", age: 25 },
}
app.use(bodyparser.json());
app.use(cors());

app.get("/user", function (req, res) {
  const { query } = req;
  res.json(users[query.name] || { error: "User not found" });
 });

 app.get("/users", function (req, res) {
  res.json(users);
 });

 app.post("/user", function (req, res) {
  const { body } = req;
  users[body.name] = body;
  res.json({ success: true });
 });

 app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
 })