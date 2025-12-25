const express = require("express");

const app = express();

// app.use("/route",rh,rh1,[rh2,rh3],rh4,rh5)

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user");
    next();
    res.send("Response 1!!");
  },
  (req, res) => {
    console.log("Hadling route user 2");
    res.send("2nd Response!!");
  }
);

app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
