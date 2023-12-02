import axios from 'axios';
import {useEffect, useState} from 'react'


const  CarouselTransition = () => {
  const [index ,setIndex] = useState(0)
  const [restaurants, setRestaurants] = useState([]);
    

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

const handlePrevClick = () => {
  setIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : restaurants.length - 1));
};

const handleNextClick = () => {
  setIndex(prevIndex => (prevIndex < restaurants.length - 1 ? prevIndex + 1 : 0));
};

  useEffect(()=>{
         const timer = setTimeout(() => {
                    handleNextClick()
         }, 1000);
          
         return () =>{
              clearTimeout(timer)
         }
  },[index])

  return (
      <>
        
        <div className='flex justify-center mt-6 relative'>
  <div className='mr-10 mt-36'>
    <button onClick={handlePrevClick} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>&lt;</button>
  </div>
  {restaurants.length > 0 && (
    <div key={restaurants[index].id} className='relative'>
      <div className='relative'>
        <img className='lg:h-80 lg:w-[75rem] rounded-md' src={restaurants[index].image} alt="not found" />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
          <div className='text-white text-5xl font-bold'>{restaurants[index].name}</div>
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 blur-md'></div>
      </div>
    </div>
  )}
  <div className='ml-10 mt-36'>
    <button onClick={handleNextClick} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> &gt;</button>
  </div>
</div>


      </>
  );
}

export default CarouselTransition;