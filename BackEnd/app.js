require("dotenv").config();
const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");
// const { log } = require("console");

const app = express();

const bookRouter = require("./routes/bookRouter");

app.use(express.json()); //This allows access to the req.body in our app

app.use("/api/v1/book", bookRouter)

//For Backend you create your port numbers from range 3000 - 8000
const PORT = process.env.PORT;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully".yellow.bold);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.yellow.bold);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to Connect to Server/Database");
  }
};

start();
