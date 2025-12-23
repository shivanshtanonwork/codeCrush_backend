const express = require("express");

const app = express();

//This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Shivansh", lastName: "Tandon" });
});

app.post("/user", (req, res) => {
  console.log("Save data to DB");
  res.send("Data successfully saved to the DB");
});

app.delete("/user", (req, res) => {
  res.send("Deleted Successfully!");
});
// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
