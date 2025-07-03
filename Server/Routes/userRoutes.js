import express from "express";
import {
  login,
  signup,
  resetPassword
} from "../Controllers/userController.js";
import { isAuthenticated } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup); // my users should signup here
router.post("/login", login); // my users should login here
router.post("/resetPassword", isAuthenticated, resetPassword); // updating password

export default router;
