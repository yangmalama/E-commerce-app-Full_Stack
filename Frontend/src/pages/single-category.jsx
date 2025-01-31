import React from "react";
import SingleProductCard from "../components/single-product-card";
import myImage from "../../public/lays.jpg";

export default function SingleCategory() {
  const products = [
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldiram's Sev Bhujia",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "NutriChoice Digestive",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldiram's Sev Bhujia",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "NutriChoice Digestive",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Blueberry Greek Yogurt",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldiram's Sev Bhujia",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Blueberry Greek Yogurt",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldiram's Sev Bhujia",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldiram's Sev Bhujia",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Cadbury 5 Star Chocolate",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldiram's Sev Bhujia",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Onion Flavour Potato",
      ratings: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
  ];

  return (
    <div className="w-10/12 mx-auto">
      <div className="bg-gray-300 py-24 text-5xl font-semibold text-center">
        Snacks and Munchies
      </div>
      {/* List of products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4">
        {products.map((eachItem, index) => (
          <SingleProductCard eachItem={eachItem} key={index} /> //Props passing
        ))}
      </div>
    </div>
  );
}
