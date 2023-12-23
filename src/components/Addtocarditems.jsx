import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Addtocarditems = () => {
  const carditems = useSelector((store) => store.fooditemsCard.items);
  const token = sessionStorage.getItem('Token');
  const isLogin = JSON.parse(token);

  return (
    <>
      <div>
        {isLogin ? (
          carditems.length === 0 ? (
            <div className="flex items-center justify-center lg:h-80 lg:ml-[31rem]">
              <div className="flex flex-col bg-white items-center rounded-xl">
                <div className="p-4 text-center md:py-7 md:px-5">
                  <h3 className="text-3xl font-bold text-gray-800">Opps</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Your Card is empty to order food from some Tasty Food
                  </p>
                  <Link to="/restuarent">
                    <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Add Card
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {carditems.map((items) => (
                <div key={items.id}>
                  <div className="lg:ml-10 mt-5 mb-5 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-100 md:max-w-xl md:flex-row">
                    <img
                      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={items.image}
                      alt=""
                    />
                    <div className="flex flex-col justify-start p-6">
                      <h5 className="mb-2 text-xl font-medium">{items.name}</h5>
                      <p className="mb-4 text-base">
                        This is a Food with supporting masala below as a natural Oil
                        to additional Meat Food is a little Healthy longer.
                      </p>
                      <p className="text-xs">Price : {items.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="h-screen w-screen bg-yellow-400 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Please Login</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Addtocarditems;
