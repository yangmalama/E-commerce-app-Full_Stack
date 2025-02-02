import React from "react";
import myImage from "../../public/product-single-img-1.jpg";
import ReactStars from "react-stars";

export default function ProductDescription() {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-2">
      <div>
        <img src={myImage} alt="singleProduct" />
      </div>

      <div className="space-y-4">
        <p className="text-s text-green-500 font-semibold">Snack & Munchies</p>
        <p className="text-3xl font-semibold">Haldiram's Sev Bhujia</p>
        <div className="flex items-center gap-2">
          <ReactStars count={5} size={16} value={4.5} color2={"#ffd700"} />
          <p className="text-xs text-green-500 font-semibold">(4 reviews)</p>   
        </div>
        <hr />

        <div className="space-x-4 mt-8">
          <span className="border border-gray-400 text-gray-500 font-semibold py-2 px-4 rounded-md">250g</span>
          <span className="border border-gray-400 text-gray-500 font-semibold py-2 px-4 rounded-md">500g</span>
          <span className="border border-gray-400 text-gray-500 font-semibold py-2 px-4 rounded-md">1kg</span>
        </div>

      </div>
    </div>
  );
}
