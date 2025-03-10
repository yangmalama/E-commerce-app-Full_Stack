import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import { ShoppingBag } from "lucide-react";
import { ArrowRightLeft } from "lucide-react";
import { Heart } from "lucide-react";
import myImage from "../../public/product-single-img-1.jpg";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { useLocation } from "react-router";
import axios from "axios";
export default function ProductDescerption() {
  // Use effect with hook
  // it runs after the page reloads and depends upon dependency array
  // useEffect(()=>{
  //   console.log("Use effect is running")
  // },[])

  // state in react with hooks
  // const[variable.Set variable/setter]=useState(initial value)

  // props(properties) in react
  // Props cannot be changed by child component
  // props can be only passed from parent to child
  const [count, setCount] = useState(1);

  const location = useLocation();
  const product_id = location.pathname.split("/")[2];

  const [isFectching, setIsFetching] = useState(false);

  // fetch ingle product by ID
  const [singleProduct, setSingleProduct] = useState();
  const fetchSingleProduct = async () => {
    try {
      setIsFetching(true);
      const response = await axios.get(
        `http://localhost:4000/products/${product_id}`
      );
      setSingleProduct(response.data.data);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log("Something went wrong while fectching single product", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [product_id]);

  return (
    <div>
      {isFectching ? (
        <p>Loading........</p>
      ) : (
        <div className="w-10/12 mx-auto grid grid-cols-2 gap-15 mt-8">
          {/* Left child */}
          <div>
            {/* <img src={myImage} alt="" className="rounded-md" /> */}
            <InnerImageZoom src={singleProduct?.imageUrl} />

            <div className="flex justify-between mt-4">
              <img
                src={myImage}
                alt=""
                className=" h-20 border border-green-500 rounded-md "
              />
              <img src={myImage} alt="" className=" h-20 rounded-md " />
              <img src={myImage} alt="" className=" h-20 rounded-md " />
              <img src={myImage} alt="" className=" h-20 rounded-md" />
            </div>
          </div>

          {/* right child */}
          <div className="space-y-2">
            <p className="text-sm text-green-500 font-semibold cursor-pointer">
              {singleProduct?.category}
            </p>
            <p className="text-3xl font-semibold">{singleProduct?.name}</p>
            <p className="font-semibold">
              {singleProduct?.price}{" "}
              <span className="text-gray-500 line-through">
                {singleProduct?.previousPrice}
              </span>{" "}
              <span className="text-red-500 text-sm">10% Off</span>
            </p>

            <div className="flex items-center gap-2">
              <ReactStars
                count={5}
                size={18}
                value={4.5}
                color2={"#ffd700"}
                className="cursor-pointer"
              />
              <p className="text-green-500 text-xs font-semibold cursor-pointer">
                (4 reviews)
              </p>
            </div>
            <hr className="text-gray-200 mt-4" />

            <div className="mt-6 flex space-x-2 ">
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer">
                250g
              </span>
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer">
                500g
              </span>
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer">
                1kg
              </span>
            </div>

            {/* <div className='mt-6'>
                    <span className='border border-gray-200 px-2'>-</span>
                    <span className='border border-gray-200 px-5'>1</span>
                    <span className='border border-gray-200 px-2'>+</span>
                </div> */}
            <div className="flex gap-1 mt-6 ">
              <Minus
                size={32}
                on
                onClick={(e) => setCount(count - 1)}
                className="border border-gray-200 px-2 cursor-pointer"
              />
              <p className="text-xl border border-gray-200 px-2">{count}</p>
              <Plus
                size={32}
                on
                onClick={(e) => setCount(count + 1)}
                className="border border-gray-200 px-2 cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-2 mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 flex gap-2 cursor-pointer">
                <ShoppingBag color="white" />
                Add to cart
              </button>
              <ArrowRightLeft
                color="black"
                className="rounded-md w-10 h-9.5 p-2.5 opacity-70 bg-gray-200 hover:bg-gray-300 cursor-pointer"
              />
              <Heart className="rounded-md w-10 h-9.5 p-2.5 opacity-70 bg-gray-200 hover:bg-gray-300 cursor-pointer" />
            </div>
            <hr className="text-gray-200 mt-6" />

            <div className="grid grid-cols-2 opacity-60 text-sm space-y-4 font-semibold pl-6">
              <div>
                <p>Product Code:</p>
                <p>Availability:</p>
                <p>Type:</p>
                <p>Shipping</p>
              </div>
              <div>
                <p>FBB00255</p>
                <p>In Stock</p>
                <p>Fruits</p>
                <p>01 day shipping. (Free pickup today)</p>
              </div>
            </div>

            <button className="font-semibold border px-4 py-2 rounded-md text-gray-400 text-sm mt-6 cursor-pointer hover:bg-gray-400 hover:text-white">
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
