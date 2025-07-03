import Admin from "../Models/admin.js";
import User from "../Models/user.js";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
    try {
        const { name, password } = req.body;
        const admin = await Admin.findOne({ name });

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        const isMatch = await password === admin.password;

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ _id: admin._id, isAdmin: true }, process.env.SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({ token, admin });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndDelete(userId);
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: "Unable to delete user" });
    }
};
