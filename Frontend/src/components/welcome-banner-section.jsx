import React from "react";
import myImage from "../../public/about-icons.svg";

export default function WelcomeBannerSection() {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto bg-green-100/50 rounded-xl space-y-4 px-6">
      <div className="flex items-center space-x-4">
        <img src={myImage} alt="basket" />
        <div>
        <p className="font-medium text-3xl opacity-90">Welcome to FreshCart</p>
        <p className="text-sm font-semibold opacity-70">
          Download the app get free food & <span className="text-green-600">$30</span> off on your first order.
        </p>
      </div>
      </div>

      <div>
        <button className="bg-black text-white rounded-lg hover:bg-gray-800 transition px-4 py-2 text-md font-semibold">
          Download FreshCart App
        </button>
      </div>
    </div>
  );
}
