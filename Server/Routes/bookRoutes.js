import express from "express";
import { getAllBooks, getBookById } from "../Controllers/bookController.js";
import { addBookToCart, getCart, deleteBookFromCart, addReviewToBook } from "../Controllers/userController.js"
import { isAuthenticated, isAuthorized } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get('/allBooks', getAllBooks);
router.get('/bookById', getBookById);
router.post('/addBookToCart/:userId', isAuthenticated, isAuthorized, addBookToCart);
router.get('/cart/:userId', isAuthenticated, isAuthorized, getCart);
router.delete('/cart/:userId/:bookId', isAuthenticated, isAuthorized, deleteBookFromCart);
router.post('/:bookId/reviews/:userId', isAuthenticated, addReviewToBook);

export default router;
