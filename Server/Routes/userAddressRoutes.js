import express from "express";
import {
  addUserAddress,
  updateUserAddress,
  getUserAddresses,
  deleteUserAddress
} from "../Controllers/userController.js";
import { isAuthenticated, isAuthorized } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/addAddress/:userId", isAuthenticated, isAuthorized, addUserAddress);
router.put("/updateAddress/:userId/:addressId", isAuthenticated, isAuthorized, updateUserAddress);
router.delete("/deleteUserAddress/:userId/:addressId", isAuthenticated, isAuthorized, deleteUserAddress);
router.get("/getAddresses/:userId", isAuthenticated, isAuthorized, getUserAddresses);

export default router;
