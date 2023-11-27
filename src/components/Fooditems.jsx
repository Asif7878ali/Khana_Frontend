import React from 'react'
import Addtocarditems from './Addtocarditems'
import { useSelector } from 'react-redux'

const Fooditems = () => {
    const carditems = useSelector((store) => store.fooditemsCard.items) 
  return (
    <>
    <div className='flex flex-wrap'>
        <Addtocarditems key={carditems.id}/>
    </div>
    </>
  )
}

export default Fooditems