import express from "express";
import {
  deleteUserById,
  getAllUser,
  loginUser,
  registerUser,
  updateUserById,
  getUserById
} from "../controller/userController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
