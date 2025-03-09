import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors"

// configure the server
const app = express();

// middleware json
app.use(express.json());
app.use(cors())

// connect database MongoDB
try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connection successful!!");
} catch (error) {
  console.log("MongoDB connection error!, error");
}

app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);

// check user
// check database
// Configure server+

app.get("/", (req, res) => {
  res.send("Ecommerce backend server is running");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started ON http://localhost:${process.env.APP_PORT}`);
});
