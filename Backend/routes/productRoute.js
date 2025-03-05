import express from "express";
import { createProduct, deleteProductById, getAllProducts, getProductsById, updateProductById } from "../controller/productController.js";
const router = express.Router();
import multer from "multer";
import { verifyToken } from "../middleware/verifyToken.js";
const upload = multer({ dest: "uploads/" });


router.post("/",verifyToken, upload.single("imageUrl"),createProduct)
router.get("/",getAllProducts)
router.get("/:id",getProductsById)
router.patch("/:id",verifyToken, upload.single("imageUrl"),updateProductById)
router.delete("/:id",verifyToken, deleteProductById)

export default router;