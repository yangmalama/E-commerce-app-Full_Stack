import React from 'react'
import bannerImageOne from "../../public/banner1.png";
import bannerImageTwo from "../../public/banner2.jpg";


export default function BannerSection() {
  return (

    <div className='w-10/12 mx-auto grid grid-cols-2 gap-8 mt-24'>
      <div className='relative h-64'>
        <img  src={bannerImageOne} alt="bannerImageTwo" />
        <div className='absolute top-8 left-8'>
          <p className='text-2xl font-bold opacity-80'>
            Fruits & Vegetables
          </p>
          <p className='text-gray-600 font-semibold mb-4 text-sm'>
          Get Upto 30% Off</p>
          <button className='text-white bg-color bg-stone-800 p-2 pr-4 pl-4 border rounded-md font-medium'>Shop Now</button>
        </div>
      </div>
      <div className='relative h-64'>
        <img src={bannerImageTwo} alt="bannerImageTwo" />
        <div className='absolute top-8 left-8'>
          <p className='text-2xl font-bold opacity-80'>
          Freshly Baked Buns
          </p>
          <p className='text-gray-600 font-semibold mb-4 text-sm'>
          Get Upto 25% Off</p>
          <button className='text-white bg-color bg-stone-800 p-2 pr-4 pl-4 border rounded-md font-medium'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}
