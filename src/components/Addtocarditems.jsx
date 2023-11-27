import React from 'react'
import { useSelector } from 'react-redux'

const Addtocarditems = () => {
   
const carditems = useSelector((store) => store.fooditemsCard.items)  
    
  return (
    <>
     {carditems.map((items, index) => 
        <div key={index} className="ml-5 mt-3 mb-3 max-w-sm h-50 lg:w-60 rounded overflow-hidden shadow-lg">
           <img className="w-60 h-36" src={items.image} alt="Sunset in the mountains"/>
           <div className="px-6 pb-2 pt-2 text-2xl font-bold text-center">{items.name}</div>
        </div>
       )}
      
    </>
  )
}

export default Addtocarditems