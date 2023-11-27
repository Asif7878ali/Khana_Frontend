import {useState} from 'react'
import { KhanaKhazanaApi } from './data.js';
import Cards from './Cards.jsx';
import { Link } from 'react-router-dom';

const Restuerenttems = () => {
    const [res] = useState(KhanaKhazanaApi.restaurants)
    
    const token = localStorage.getItem('Token');
    const isLogin = JSON.parse(token);
 
  
  return (
    <>

     { isLogin ? (
        <div className='flex flex-wrap'>
        {res?.map((resturentitem, index) => {
          return <Link to={'/restuarent/' + index}> <Cards key={index} restuarent={resturentitem}/> </Link>
          })}
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