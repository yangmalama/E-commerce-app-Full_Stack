import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import myimage from "../../public/lays.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeatureCategoriesSection() {
  // // useState hooks
  // const[ name,setName] = useState("Yangma Lama")
  // // const[ varibale name,setter function] = useState("initial value")
  // const handleChangeName=()=>{
  //   setName("yangma lama change")
  // }

  // fetch all categories function
  const [isLoading, setIsLoading] = useState(false);
  const [allCategories, setAllCategories] = useState();
  const fetchAllCategories = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:4000/categories");
      setIsLoading(false);
      console.log(response.data.data);
      setAllCategories(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.log("Something went wrong", error);
    }
  };
  console.log(allCategories, "This is all categories");
  console.log(isLoading, "loading state");

  useEffect(() => {
    fetchAllCategories();
  }, []);

  //   const categories = [
  //     {
  //       image: myimage,
  //       name: "Biscuits",
  //     },

  //     {
  //       image: myimage,
  //       name: "Biscuits 2",
  //     },
  //     {
  //       image: myimage,
  //       name: "Biscuits 3",
  //     },
  //     {
  //       image: myimage,
  //       name: "Biscuits 4",
  //     },
  //     {
  //       image: myimage,
  //       name: "Biscuits 5",
  //     },
  //     {
  //       image: myimage,
  //       name: "Biscuits 6",
  //     },
  //     {
  //       image: myimage,
  //       name: "Biscuits 7",
  //     },
  //     {
  //       image: myimage,
  //       name: "Biscuits 8",
  //     },
  //   ];

  return (
    <div className=" w-10/12 mx-auto md:space-y-4 mt-24">
      {/* <button className="bg-green-500" onClick={handleChangeName}>Change name</button> */}
      <p className=" text-3xl font-semibold ">Featured Categories</p>
      {isLoading=== true && <p>loading......</p>}
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
          {allCategories?.map((eachItem, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-2 border border-gray-300  rounded-2xl flex flex-col items-center justify-center hover:border-green-500 hover:shadow-2xl duration-500">
                <img
                  src={eachItem.imageUrl}
                  alt="lays"
                  height={150}
                  width={150}
                  className=""
                />
                <p className="font-semibold">{eachItem.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
         
    </div>
  );
}
