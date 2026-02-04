const express = require("express");

const app = express();

app.get("/userData", (req, res) => {
  try {
    throw new Error("dghbfvh");
    res.send("User data sent");
  } catch (err) {
    res.status(500).send("Some error occurred contact support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
