import React, { useEffect, useState } from "react";
import myImage from "../../public/lays.jpg";
import SingleProductCard from "./single-product-card";
import axios from "axios";


export default function PopularProductSection(eachItem) {
  // const products = [
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Haldiram's Sev Bhujia",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "NutriChoice Digestive",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Haldiram's Sev Bhujia",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "NutriChoice Digestive",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Blueberry Greek Yogurt",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Haldiram's Sev Bhujia",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Blueberry Greek Yogurt",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Haldiram's Sev Bhujia",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Haldiram's Sev Bhujia",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Cadbury 5 Star Chocolate",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Haldiram's Sev Bhujia",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Onion Flavour Potato",
  //     ratings: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  // ];

  // hooks(useState, useEffect, useRef, useContext)
  //1. useState hook
  // const[ varibale name,setter function] = useState("initial value")
  // const [name, setName] = useState("Yangma Lama");
  // console.log(name);

  // 2. useEffect Hook
  // useEffect runs when the pagde reloads for its dependency changes.
  // []-> dependency Array
  // const a=8
  // useEffect(() => {
  //   console.log("I am useEffect");
  // }, [a]);

  const [allProducts, setAllProducts]= useState()
  const fetchAllProducts=async()=>{
    try {
      const response = await axios.get("http://localhost:4000/products")
      console.log(response.data.data)
      setAllProducts(response.data.data)
    } catch (error) {
      console.log("Something went wrong", error)
    }
  }

  useEffect(()=>{
    fetchAllProducts();
  },[])

  return (
    <div className="w-10/12 mx-auto space-y-4 mt-24">
      {/* <button onClick={()=>setName("Yangma Upated")}>Change Name</button> */}
      <p className="text-3xl font-semibold">Popular Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    2xl:grid-cols-5  gap-4 ">
        {allProducts?.map((eachItem, index) => (
          <SingleProductCard eachItem={eachItem} key={index} />
        ))}
      </div>
    </div>
  );
}
