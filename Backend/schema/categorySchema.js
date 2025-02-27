import mongoose from "mongoose";

// category schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
});

// category table
export const Category = mongoose.model("Category", categorySchema);