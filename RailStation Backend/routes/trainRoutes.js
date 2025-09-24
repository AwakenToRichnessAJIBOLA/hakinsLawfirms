const express = require("express");
const {
  getAllTrains,
  getTrainById,
  searchTrains,
  createTrain,
  updateTrain,
  deleteTrain,
} = require("../controllers/trainController");

const { protect } = require("../middlewares/authMiddlewares");
const router = express.Router();

router.get("/", getAllTrains);
router.get("/:id", getTrainById);
router.post("/search", protect, searchTrains);

router.post("/", protect, createTrain);
router.put("/:id", protect, updateTrain);
router.delete("/:id", protect, deleteTrain);

module.exports = router;
