import React from "react";
import myImage from "../../public/lays.jpg";
import ReactStars from "react-stars";

export default function PopularProductSection() {
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
      <div className="grid grid-cols-5 gap-4">
        {products.map((eachItem, index) => (
          <div key={index} className="border border-gray-300 rounded-md flex flex-col items-center justify-center p-4 space-y-1.5">
            <img src={eachItem.image} alt="product" />
            <p className="font-semibold opacity-70 text-xs">{eachItem.category}</p>
            <p className="font-semibold text-sm">{eachItem.name}</p>
            <div className="flex items-center gap-3">
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={16}
                value={4.5}
                color2={"#ffd700"}
              />
              <p className="text-xs ">4.3(4)</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="font-semibold">
                $24 <span className="opacity-70">$21.6</span>
              </p>
              <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
