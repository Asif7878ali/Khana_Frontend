import React from 'react'

// Destruction Props in restuarent
const Cards = ({restuarent}) => {
  
  const token = localStorage.getItem('Token');
  const isLogin = JSON.parse(token);

   //Destruction restuarent in name, image, Description , rating
      const { name, Despription, rating, image} = restuarent
     
  return (
    <>
      { isLogin ? (
              <div className="w-64 mt-5 mb-10 mr-5 ml-[1.6rem] bg-gray-100 shadow-md rounded-md overflow-hidden">
              <img src={image} alt="" className="w-full h-40 object-cover"/>
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">{name}</h1>
                <h3 className="text-lg text-gray-700 mb-2">{Despription}</h3>
                <p className="text-gray-600 font-bold">Rating:- {rating}</p>
              </div>
            </div>
      ) :(
        <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Please Login</h1>
        </div>
      </div>
      )}
     
   
    </>
  );
};

export default Cards;
