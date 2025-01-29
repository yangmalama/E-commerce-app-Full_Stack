import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import myimage from "../../public/lays.jpg";

export default function FeatureCategoriesSection() {

  const categories = [
    {
      image: myimage,
      name: "Biscuits",
    },

    {
      image: myimage,
      name: "Biscuits 2",
    },
    {
      image: myimage,
      name: "Biscuits 3",
    },
    {
      image: myimage,
      name: "Biscuits 4",
    },
    {
      image: myimage,
      name: "Biscuits 5",
    },
    {
      image: myimage,
      name: "Biscuits 6",
    },
    {
      image: myimage,
      name: "Biscuits 7",
    },
    {
      image: myimage,
      name: "Biscuits 8",
    },
  ];

  return (
    <div className=" w-10/12 mx-auto md:space-y-4 mt-24">
      <p className=" text-3xl font-semibold ">Featured Categories</p>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30} 
          pagination={{
            clickable: true,
          }}

          breakpoints={{
            640: {
              slidesPerView: 2,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              // spaceBetween: 50,
            },
            1200: {
              slidesPerView: 5,
              // spaceBetween: 50,
            },
            
          }}

          modules={[Pagination]}
          className="mySwiper"
        >

          {
            categories.map((eachItem, index)=>(
              <SwiperSlide key={index}>
            <div className="space-y-2 border border-gray-300  rounded-2xl flex flex-col items-center justify-center hover:border-green-500 hover:shadow-2xl duration-500">
            <img src={eachItem.image} alt="lays" height={150} width={150}/>
            <p className="font-semibold">{eachItem.name}</p>
            </div>
          </SwiperSlide>
            ))
          }
          
        </Swiper>
      </div>
         
    </div>
  );
}
