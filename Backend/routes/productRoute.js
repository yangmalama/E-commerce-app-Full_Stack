// import multer from "multer";
import { app } from "../server.js";
import { Product } from "../schema/productSchema.js";
// const upload = multer({ dest: "uploads/" });
// import { Category } from "./schema/categorySchema.js";
// import { v2 as cloudinary } from "cloudinary";
// import "dotenv/config";

// create a product
app.post("/products", async (req, res) => {
  try {
    // check product name is alrady taken or not
    const productExist = await Product.findOne({ name: req.body.name });
    if (productExist) {
      return res.status(409).json({
        message: " Produt name already taken , select different name",
      });
    }
    const newProduct = await new Product(req.body).save();
    return res.status(201).json({
      message: "Product created sucessfully",
      data: newProduct,
    });
  } catch (error) {
    console.log("creating a product failed");
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// get all products
app.get("/products", async (req, res) => {
  try {
    const allProduct = await Product.find();
    return res.status(200).json({
      message: "all procduct fetched sucessfully",
      data: allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Get single product
app.get("/products/:id", async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    return res.status(200).json({
      message: "Single procduct fetched sucessfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// update the product
app.patch("/products/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateProduct) {
      return res.status(404).json({
        message: "Product not found!!!!!!!!!!",
      });
    }
    return res.status(200).json({
      message: "Product Updated!!!!!!!!!!",
      data: updateProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

// delete product
app.delete("/products/:id", async (req, res) => {
  try {
    const checkProduct = await Product.findById(req.params.id);
    if (!checkProduct) {
      return res.status(404).json({
        message: "Product not found",
        data: checkProduct,
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Procduct deleted sucessfully",
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});