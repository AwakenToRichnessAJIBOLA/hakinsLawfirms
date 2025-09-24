const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updateUserProfile,
  updatePassword,
  getAllUsers,
} = require("../controllers/authController");

const { protect } = require("../middlewares/authMiddlewares");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUserProfile);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:resetToken", resetPassword);
router.put("/update-profile", protect, updateUserProfile);
router.put("/update-password", protect, updatePassword);
router.get("/users", getAllUsers);

module.exports = router;
