import React from "react";
import myImage from "../../public/ad-banner-1.jpg";
import myImageTwo from "../../public/ad-banner-2.jpg";
import myImageThree from "../../public/ad-banner-3.jpg";


export default function AdBannerSection() {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
      <div>
      <div className="relative h-64 rounded-lg flex flex-col justify-between overflow-hidden ">
        <img src={myImage} alt="banner1" />
        <div className="absolute top-8 left-8">
          <p className="text-lg  md:text-2xl font-bold opacity-80">
            10% cashback on <br />personal care
          </p>
          <p className="font-semibold text-lg mt-4 opacity-60">
            Max cashback: $12
          </p>
          <p className="text-gray-600 mt-1 text-base md:text-lg font-semibold">
            Code: <span className="font-bold">CARE12</span>
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>
      </div>

      <div>
        <div className="relative h-64 rounded-lg flex flex-col justify-between overflow-hidden">
          <img src={myImageTwo} alt="banner1" />
          <div className="absolute top-8 left-8">
            <p className="text-2xl font-bold opacity-80">
              Say yes to <br /> season’s fresh
            </p>
            <p className="font-semibold text-lg mt-4 opacity-60">
              Refresh your day <br />the fruity way
            </p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="relative h-64 rounded-lg flex flex-col justify-between overflow-hidden ">
          <img src={myImageThree} alt="banner1" />
          <div className="absolute top-8 left-8">
            <p className="text-2xl font-bold opacity-80">
              When in doubt,<br /> eat ice cream
            </p>
            <p className="font-semibold text-lg mt-4 opacity-60">
              Enjoy a scoop of <br /> summer today
            </p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
