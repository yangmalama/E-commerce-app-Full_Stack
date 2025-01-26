import React from 'react';
import { Heart, MapPin } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import myLogo from "../../public/logo.svg";

export default function MiddleNavbar() {
  return (
    <div className="flex justify-between w-10/12 mx-auto ">
    <div>
      <img src={myLogo} alt="logo" />
    </div>
    <div className="flex space-x-8">
      <input
        className=" border border-green-500 rounded-md w-96 pl-2 "
        type="text"
        placeholder="Search Location"
      />
      <button className="flex gap-1 items-center border border-green-500 px-4 rounded-md">
        {" "}
        <MapPin size={16} /> Location       
      </button>
    </div>

    <div className="flex gap-4">
      <Heart />
      <User />
      <ShoppingBag />
    </div>
  </div>
  )
}
