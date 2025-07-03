import Book from "../Models/books.js";

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Unable to retrieve books" });
    }
};

export const getBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ error: "Unable to retrieve book by ID" });
    }
};

export const addBook = async (req, res, next) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ error: "Unable to add book" });
    }
};

export const updateBook = async (req, res, next) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.bookId,
            req.body,
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: "Unable to update book" });
    }
};

export const deleteBook = async (req, res, next) => {
    try {
        const deletedBook = await Book.findByIdAndRemove(req.params.bookId);
        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json({ message: "Book deleted" });
    } catch (error) {
        res.status(500).json({ error: "Unable to delete book" });
    }
};
