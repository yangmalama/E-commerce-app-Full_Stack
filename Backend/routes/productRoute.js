import express from "express";
import { createProduct, deleteProductById, getAllProducts, getProductsById, updateProductById } from "../controller/productController.js";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });


router.post("/", upload.single("imageUrl"),createProduct)
router.get("/",getAllProducts)
router.get("/:id",getProductsById)
router.patch("/:id",upload.single("imageUrl"),updateProductById)
router.delete("/:id",deleteProductById)

export default router;