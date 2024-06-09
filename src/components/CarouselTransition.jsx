import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const CarouselTransition = () => {
 
  const [restaurants, setRestaurants] = useState([]);
  const [activeItem, setActiveItem] = useState(0);

 

  const handlePrevClick = () => {
    setActiveItem((prevItem) =>
      prevItem === 0 ? restaurants.length - 1 : prevItem - 1
    );
  };

  const handleNextClick = useCallback(() => {
    setActiveItem((prevItem) =>
      prevItem === restaurants.length - 1 ? 0 : prevItem + 1
    );
  }, [restaurants.length]);

  useEffect(() => {
    const fetchData = async () => {
      const myApiData = "https://restuarent.onrender.com/restaurants";
      try {
        const responce = await axios.get(myApiData);
        setRestaurants(responce.data);
        console.log(responce.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeItem, handleNextClick]);



  return (
    <>
       <div className="relative w-full lg:w-[90rem] mt-2 lg:ml-[8rem]">
       
       <div className="relative lg:h-96 overflow-hidden rounded-lg md:h-96 h-60">
         {restaurants.map((item) => (
           <div key={item.id} className={`${ item.id === activeItem ? "duration-700 ease-in-out" : "hidden"}`}
             data-carousel-item={item.id === activeItem ? "active" : ""} >
             <img src={item.image}
               className="absolute block h-full  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
               alt={`Carousel Item ${item.id + 1}`}/>
           </div>
         ))}
       </div>

       <button type="button"
         className="absolute lg:mt-40 mt-20 top-0 start-0 z-30 flex items-center text-4xl justify-center px-4 cursor-pointer group font-bold"
         onClick={handlePrevClick}> &lt; </button>
       <button type="button"
         className="absolute lg:mt-40 mt-20 top-0 end-0 z-30 flex items-center text-4xl justify-center px-4 cursor-pointer group font-bold"
         onClick={handleNextClick}> &gt; </button>
     </div>
    </>
  );
};

export default CarouselTransition;