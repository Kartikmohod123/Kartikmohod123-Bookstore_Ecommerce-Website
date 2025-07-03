import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import bookRoutes from "./Routes/bookRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

// Use routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/books", bookRoutes);

// Database connection and server start
const port = process.env.PORT;
const url = process.env.MONGO_URL;

mongoose.connect(url)
    .then(() => app.listen(port))
    .then(() => console.log(`Connected to DB at port ${port}`))
    .catch((err) => console.log(`${err} is error`));
