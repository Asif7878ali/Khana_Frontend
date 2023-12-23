import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import CarouselTransition from "./CarouselTransition.jsx";

const Restuerenttems = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [input, setInput] = useState('')

  // const token = sessionStorage.getItem('Token')
  // // const token = localStorage.getItem("Token");
  // const isLogin = JSON.parse(token);

  useEffect(() => {
    const fetchData = async () => {
      const myApiData = "https://restuarent-list.onrender.com/restaurants";
      try {
        const responce = await axios.get(myApiData);
        setRestaurants(responce.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
     
        <div>
          <div className="justify-center items-center flex">
            <input className="w-full lg:w-[83rem] font-normal px-4 py-3 my-4 border border-gray-600 text-lg shadow-lg outline-none bg-gray-100 rounded-md" placeholder="Search Restuerents..." type="text" 
             value={input} onChange={(e) => setInput(e.target.value)}/>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md"
              type="submit"> Search </button>
          </div>
          <CarouselTransition/>
          <div className="lg:flex flex-wrap lg:ml-32 ml-14">
            {restaurants?.map((resturentitem) => {
              return (
                <Link to={"/restuarent/" + resturentitem.id} key={resturentitem.id}>
                 
                  <Cards key={resturentitem.id} restuarent={resturentitem}/>
                </Link>
              );
            })}
          </div>
        </div>
    
    </>
  );
};

export default Restuerenttems;