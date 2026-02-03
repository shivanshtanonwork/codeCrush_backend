const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

// Handle Auth Middleware for all GET POST,... requests
app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
