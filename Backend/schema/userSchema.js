import mongoose from "mongoose";

// user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// user table
export const User = mongoose.model("User", userSchema);