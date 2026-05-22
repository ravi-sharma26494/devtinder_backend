const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const PORT = process.env.PORT || 3000;
const app = express();

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  // creating a new instance of the User model with the provided user data
  const user = new User(userData);
  await user.save();

  res
    .status(200)
    .json({ message: "User data received successfully", data: userData });
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
