require("dotenv").config();
const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

const authRouter = require("./routes/authRoutes");
const trainRouter = require("./routes/trainRoutes");

app.use(express.json()); //Allows access to req.body

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/trains", trainRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully".bgRed.bold);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.bgBlue.bold);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to Connect to Server/Database");
  }
};

start();
