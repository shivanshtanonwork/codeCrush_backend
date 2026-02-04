const mongoose = require("mongoose");

module.exports = connectDB;

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://shivanshtandonkkr_db_user:skQLnaOzQZmvquFl@codecrushbackend.n8ncr1d.mongodb.net/codeCrush",
  );
}
