// models/Train.js
const mongoose = require("mongoose");

const TrainClassSchema = new mongoose.Schema({
  type: { type: String, required: true },
  priceAdult: { type: String, required: true },
  priceChild: { type: String, required: true },
  reserved: { type: Number, required: true },
});

const TrainSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true, unique: true },
  route: { type: String, required: true },
  timeOfDay: { type: String, required: true },
  departure: {
    station: { type: String, required: true },
    street: { type: String, required: true },
    year: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
  },
  arrival: {
    station: { type: String, required: true },
    street: { type: String, required: true },
    year: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
  },
  duration: { type: String, required: true },
  classes: [TrainClassSchema],
});

module.exports = mongoose.model("Train", TrainSchema);
