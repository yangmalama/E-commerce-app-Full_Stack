import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import axios from "axios";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [previousPrice, setPreviousPrice] = useState(null);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);

  // console.log(title, description,price,previousPrice,category,image)
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("previousPrice", previousPrice);
      formData.append("category", category);
      formData.append("imageUrl", image);

      const response = await axios.post(
        "http://localhost:4000/products",
        formData
      );
      console.log(response);
      setSubmitting(false);
      setName("");
      setDescription("");
      setPrice("");
      setPreviousPrice("");
      setCategory("");
    } catch (error) {
      console.log("Something went wrong", error);
      setSubmitting(false);
    }
  };

  // fetch all products
  const [allProducts, setAllProducts] = useState();
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setAllProducts(response.data.data);
    } catch (error) {
      console.log("Something went wrong, error");
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(allProducts)
  return (
    <div className="w-10/12 mx-auto">
      <form
        onSubmit={createProduct}
        className="flex flex-col gap-4 border p-6 shadow-xl"
      >
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter product name"
          className="border border-gray-400 p-2 rounded-md"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter product description"
          className="border border-gray-400 p-2 rounded-md"
        />
        <input
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="100"
          className="border border-gray-400 p-2 rounded-md"
        />
        <input
          required
          value={previousPrice}
          onChange={(e) => setPreviousPrice(e.target.value)}
          type="number"
          placeholder="500"
          className="border border-gray-400 p-2 rounded-md"
        />
        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter category"
          className="border border-gray-400 p-2 rounded-md"
        />
        <input
          required
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border border-gray-400 p-2 rounded-md"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 border-none text-white border border-gray-400 p-2 rounded-md flex items-center justify-center gap-1"
        >
          {isSubmitting && <LoaderCircle className="animate-spin" />}
          <span> Create Product</span>
        </button>
      </form>
    </div>
  );
}
