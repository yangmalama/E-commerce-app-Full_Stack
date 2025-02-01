import React from "react";
import myImage from "../../public/lays.jpg";
import SingleProductCard from "./single-product-card";


export default function PopularProductSection(eachItem) {
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
    <div className="w-10/12 mx-auto space-y-4 mt-24">
      <p className="text-3xl font-semibold">Popular Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    2xl:grid-cols-5  gap-4 ">
        {products.map((eachItem, index) => (
          <SingleProductCard eachItem={eachItem} key={index} />
        ))}
      </div>
    </div>
  );
}