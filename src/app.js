const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});
app.use("/hello", (req, res) => {
  res.send("hello hello hello");
});
app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
