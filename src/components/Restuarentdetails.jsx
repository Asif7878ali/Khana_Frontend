import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { KhanaKhazanaApi } from "./data";
import Menu from "./Menu";
const Restuarentdetails = () => {
  const { id } = useParams();
  const [data] = useState(KhanaKhazanaApi.restaurants);
  const dataid = data.findIndex((item) => item.id === parseInt(id));

  const [fooditems] = useState(KhanaKhazanaApi.restaurants[dataid+1].foodItems)
  // console.log(fooditems)
  
          

  return (
    <>
      <div className="relative flex ml-72 w-full max-w-[68rem] flex-row bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5  overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 bg-clip-border">
          <img
            src={KhanaKhazanaApi?.restaurants[dataid + 1]?.image}
            alt="Not Load"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {KhanaKhazanaApi?.restaurants[dataid + 1]?.name}
          </h6>
          <h4 className="block mb-2 font-sans antialiased font-semibold leading-snug tracking-normal text-pink-500">
            Ratings: {KhanaKhazanaApi?.restaurants[dataid + 1].rating} stars
          </h4>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {KhanaKhazanaApi?.restaurants[dataid + 1]?.Despription}
          </p>

          <p className="block font-bold antialiased text-pink-500">
            Charge: {KhanaKhazanaApi?.restaurants[dataid + 1]?.deliveryCharge}
          </p>
          <p className="block font-bold antialiased  text-pink-500">
            Cousine: {KhanaKhazanaApi?.restaurants[dataid + 1]?.cuisine}
          </p>
          <p className="block antialiased font-bold text-pink-500">
            Cousine: {KhanaKhazanaApi?.restaurants[dataid + 1]?.location}
          </p>
        </div>
      </div>
      
      <div className='flex flex-wrap ml-32'>
        {fooditems.map((items, index) => {
          return  <Menu key={index} foodItems={items}/>
          
         })}
      </div>
        
    </>
  );
};

export default Restuarentdetails;
