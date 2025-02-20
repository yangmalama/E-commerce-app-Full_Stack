import express from "express";
import mongoose from "mongoose";

// configure the server
const app = express();

// middleware
app.use(express.json());

// connect databasen MongoDB

try {
  mongoose.connect(
    "mongodb+srv://yangmalama02:l7uajwH8QK5sTMdZ@cluster0.hqc45.mongodb.net/ecommerce-db?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDB connection successful!!");
} catch (error) {
  console.log("MongoDB connection error!, error");
}

// table schema
// Product schema items for the product table
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  previousPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

// make product table
const Product = mongoose.model("Product", productSchema);

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
app.patch("/products:id", async (req, res) => {
  res.send("");
});

// delete product
app.delete("/products/:id", async (req, res) => {
  try {
    const checkProduct= await Product.findById(req.params.id)
   if(!checkProduct){
    return res.status(404).json({
      message: "Product not found",
      data: checkProduct,
   } )
  }

    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
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

app.get("/", (req, res) => {
  res.send("Server is okokokokokokkkkk....");
});

app.get("/students", (req, res) => {
  res.send("100 students here Bye");
});

// check user
// check database
// Configure server+

app.listen(4000, () => {
  console.log("Server started at http://localhost:4000");
});
