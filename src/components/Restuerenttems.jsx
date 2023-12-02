import {useEffect, useState} from 'react'
import Cards from './Cards.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CarouselTransition from './CarouselTransition.jsx';


const Restuerenttems = () => {
   
    const [restaurants, setRestaurants] = useState([]);
    
    const token = localStorage.getItem('Token');
    const isLogin = JSON.parse(token);
    
    useEffect( ()=>{
      const fetchData =async ()=>{
      const myApiData = 'https://restuarent-list.onrender.com/restaurants'
            try {
               const responce = await axios.get(myApiData)
               setRestaurants(responce.data)
            } catch (error) {
             console.error('Error fetching data:', error);
            } 
     }
   fetchData()      
},[])
  
  return (
    <>
     
     { isLogin ? (
        <div>
            <CarouselTransition/>
             <div className='flex flex-wrap'>
                {restaurants?.map((resturentitem) => {
                   return  <Link to={'/restuarent/' + resturentitem.id} key={resturentitem.id}> <Cards key={resturentitem.id} restuarent={resturentitem}/>  </Link>
               })}
             </div>
      </div>
      ) : (
        <div className="min-h-screen bg-red-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Please Login</h1>
        </div>
      </div>
      )}
          
    </>
  )
}

export default Restuerenttems