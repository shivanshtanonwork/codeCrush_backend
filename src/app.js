const express = require("express");
const connectDB = require("./config/database");

const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Vidushi",
    lastName: "Choubey",
    emailId: "vidushichoubey@gmail.com",
    password: "vidushi@123",
  });
  try {
    await user.save();
    res.send("User added successfully!");
  } catch (error) {
    res.status(400).send("Error saving the user " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(3000, () => {
      console.log(`App is listening on port 3000`);
    });
  })
  .catch((err) => console.log(err));
