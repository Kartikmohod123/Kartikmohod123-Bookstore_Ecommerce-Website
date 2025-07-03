import express from "express";
import { addBook, updateBook, deleteBook } from "../Controllers/bookController.js"
import { adminLogin, deleteUser } from "../Controllers/adminController.js";
import { getAllUsers } from "../Controllers/userController.js";
import { isAuthenticated, isAdmin } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/allusers", isAuthenticated, isAdmin, getAllUsers);
router.delete("/dltuser/:userId", isAuthenticated, isAdmin, deleteUser);
router.post('/addBook', isAuthenticated, isAdmin, addBook);
router.put('/updateBook', isAuthenticated, isAdmin, updateBook);
router.delete('/deleteBook', isAuthenticated, isAdmin, deleteBook);

export default router;
