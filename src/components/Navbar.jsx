import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUsers } from "./LoginDetailsSlice";

const Navbar = () => {

  const token = localStorage.getItem('Token');
  const isLogin = JSON.parse(token);

  const dispatch = useDispatch();

  const carditems = useSelector((store) => store.fooditemsCard.items);
  const users = useSelector((store) => store.loginDetail.data);
  
  return (
    <>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
          <div className="text-red-700 font-extrabold text-2xl flex items-center cursor-pointer">
            Khana-Khazana
          </div>
     
         
        { isLogin ? (
          <div className="mx-auto flex items-center justify-between space-x-3">
              <div className="hidden md:flex space-x-4 cursor-pointer">
                <Link to="/restuarent">
                  <p className="text-white hover:text-gray-300">Home</p>
                </Link>
                <Link to="/about">
                  <p className="text-white hover:text-gray-300">About</p>
                </Link>
                <Link to="/contact">
                  <p className="text-white hover:text-gray-300">Contact</p>
                </Link>
                <Link to="/card">
                  <p className="text-white hover:text-gray-300">
                    Card: {carditems?.length}
                  </p>
                </Link>
              </div>

              <div>
                <div className="relative text-gray-600 md:ml-10">
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-2 mr-2"
                  >
                    <svg
                      className="text-gray-600 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-5-5m0 0l-5-5m5 5l-5-5m5 5H10"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex">
                <div className="text-white">
                  <div className="flex space-x-1">
                    <p className="pl-9">{users?.first_name}</p>
                    <p>{users?.last_name}</p>
                  </div>
                  <p>{users?.email}</p>
                </div>
                <Link to="/login">
                  <button type="submit" onClick={() =>  {
                          dispatch(clearUsers())
                          localStorage.removeItem('Token')
                  } }

                    className="bg-yellow-300 hover:bg-yellow-500 text-white font-bold md:ml-10 mt-1 px-2 py-2 rounded-md"
                  >
                    Logout
                  </button>
                </Link>
              </div>
          </div>
        ) : (
          <Link to="/">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Signin
            </button>
          </Link>
        )}
        {/* ... (rest of your code) */}
        </div>    
      </nav>
    </>
  );
};

export default Navbar;
