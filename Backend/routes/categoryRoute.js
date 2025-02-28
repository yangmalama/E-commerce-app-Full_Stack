import multer from "multer";
import { app } from "../server.js";
const upload = multer({ dest: "uploads/" });
import { Category } from "./schema/categorySchema.js";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Category CRUD
export const createCategory = app.post(async (req, res) => {
  try {
    // check if category name already exists
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({ message: "Category already exist" });
    }
    // Handle the image upload before saving to database
    console.log(req.file);
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    console.log(cloudinaryResponse);

    const newCategory = await new Category({
      ...req.body,
      imageUrl: cloudinaryResponse.secure_url,
    }).save();
    return res.status(201).json({
      message: "Category created sucessfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

// app.get("/categories", async (req, res) => {
//   try {
//     const allCategories = await Category.find();
//     return res.status(200).json({
//       message: "All categories fetched sucessfully",
//       data: allCategories,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal Server error" });
//   }
// });

// app.get("/categories/:id", async (req, res) => {
//   try {
//     const singleCategory = await Category.findById(req.params.id);
//     if (!singleCategory) {
//       return res.status(404).json({
//         message: "Category not found",
//       });
//     }
//     return res.status(200).json({
//       message: "Sinlge Category fetcheed sucessfully",
//       data: singleCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal Server error" });
//   }
// });

// app.patch("/categories/:id", async (req, res) => {
//   try {
//     const updatedCategory = await Category.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     return res.status(200).json({
//       message: "Category updated",
//       data: updatedCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal Server error" });
//   }
// });

// app.delete("/categories/:id", async (req, res) => {
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deletedCategory) {
//       return res.status(404).json({
//         message: "Category doesnot exist",
//       });
//     }
//     return res.status(200).json({
//       message: "Category Deleted sucessfully!!",
//       data: deletedCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal Server error" });
//   }
// });
