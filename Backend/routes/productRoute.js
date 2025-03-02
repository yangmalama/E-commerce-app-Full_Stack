import express from "express";
import { createProduct, deleteProductById, getAllProducts, getProductsById, updateProductById } from "../controller/productController.js";
const router = express.Router();


router.post("/",createProduct)
router.get("/",getAllProducts)
router.get("/:id",getProductsById)
router.patch("/:id",updateProductById)
router.delete("/:id",deleteProductById)

export default router;