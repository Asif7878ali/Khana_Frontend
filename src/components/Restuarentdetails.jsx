import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Menu from "./Menu";


const Restuarentdetails = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);
   
  useEffect(() => {
    const fetchData =async ()=>{
      const myApiData = `https://restuarent-list.onrender.com/restaurants/${id}`;
      try {
        const responce = await axios.get(myApiData)
        setData(responce.data)
     } catch (error) {
      console.error('Error fetching data:', error);
     } 
  }
      fetchData() 
   }, [id]);
  console.log(data)
  const { image, name, rating, Despription ,deliveryCharge ,cuisine , location } = data  

  const foodItems = data.foodItems
        
  return (
    <>
      <div className="relative mt-5 flex ml-72 w-full max-w-[68rem] flex-row bg-gray-100 bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5  overflow-hidden text-gray-700 bg-gray-100 rounded-r-none shrink-0 bg-clip-border">
          <img
            src={image}
            alt="Not Load"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            Name : {name}
          </h6>
          <h4 className="block mb-2 font-sans antialiased font-semibold leading-snug tracking-normal text-pink-500">
            Ratings : {rating} stars
          </h4>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {Despription}
          </p>

          <p className="block font-bold antialiased text-pink-500">
            Charge : {deliveryCharge}
          </p>
          <p className="block font-bold antialiased  text-pink-500">
            Cousine : {cuisine}
          </p>
          <p className="block antialiased font-bold text-pink-500">
            Area : {location}
          </p>
        </div>
      </div>

      
      <div className='flex flex-wrap ml-32'>
        {foodItems?.map((items) => {
          return  <Menu key={items.id} foodItems={items}/>
          
         })}
      </div>
        
    </>
  );
};

export default Restuarentdetails;
