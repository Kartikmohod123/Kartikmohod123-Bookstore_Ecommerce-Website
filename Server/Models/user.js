import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Book",
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
});

const userAddressSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
});

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // profileImg: {
    //     type: String,
    //     required: false,
    // },
    shoppingCart: [cartItemSchema],
    addresses: [userAddressSchema],
});

export default mongoose.model("User", userSchema);