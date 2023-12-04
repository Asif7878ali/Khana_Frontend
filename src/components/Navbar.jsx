import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUsers } from "./LoginDetailsSlice";

const Navbar = () => {
  const token = localStorage.getItem("Token");
  const isLogin = JSON.parse(token);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const dispatch = useDispatch();

  const carditems = useSelector((store) => store.fooditemsCard.items);
  const users = useSelector((store) => store.loginDetail.data);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-yellow-200">
        <div className="text-red-700 font-extrabold text-2xl cursor-pointer">
          Khana-Khazana
        </div>

        {isLogin ? (
          <>
            <div className="font-bold sm:text-sm">
              <div className="pr-6 lg:flex lg:space-x-1">
                <p className="pl-9">{users?.first_name}</p>
                <p className="pl-9 lg:pl-1">{users?.last_name}</p>
              </div>
              <p>{users?.email}</p>
            </div>
            <div className="hidden md:hidden lg:flex">
              <div className="lg:flex space-x-4 cursor-pointer pt-2">
                <Link to="/restuarent">
                  <p className="hover:text-gray-300 font-bold">Home</p>
                </Link>
                <Link to="/about">
                  <p className="font-bold hover:text-gray-300">About</p>
                </Link>
                <Link to="/contact">
                  <p className="font-bold hover:text-gray-300">Contact</p>
                </Link>
                <Link to="/card">
                  <p className="font-bold hover:text-gray-300">
                    Card: {carditems?.length}
                  </p>
                </Link>
              </div>

              <Link to="/login">
                <button
                  type="submit"
                  onClick={() => {
                    dispatch(clearUsers());
                    localStorage.removeItem("Token");
                  }}
                  className="lg:ml-40 bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-1"
                >
                  Logout
                </button>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center text-blue-600 p-3"
                onClick={toggleMenu}
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>

            <div className={`navbar-menu ${isMenuOpen ? "block" : "hidden"}`}>
              <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-yellow-200 border-r overflow-y-auto z-50">
                <div className="flex items-center mb-8">
                  <h1 className="mr-auto text-3xl text-red-500 font-bold leading-none">
                    Khana-Kazana
                  </h1>
                  <button className="navbar-close" onClick={toggleMenu}>
                    <svg
                      className="h-6 w-6 text-black cursor-pointer hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="justify-center items-center">
                  <Link to="/restuarent">
                    <p className="hover:text-gray-300 font-bold pb-5">Home</p>
                  </Link>
                  <Link to="/about">
                    <p className="font-bold hover:text-gray-300 pb-5">About</p>
                  </Link>
                  <Link to="/contact">
                    <p className="font-bold hover:text-gray-300 pb-5">
                      Contact
                    </p>
                  </Link>
                  <Link to="/card">
                    <p className="font-bold hover:text-gray-300">
                      Card: {carditems?.length}
                    </p>
                  </Link>
                </div>
                {/* Sign in and Sign up buttons */}
                <div className="mt-auto">
                  <div className="pt-6">
                    <Link to="/login">
                      <button
                        type="submit"
                        onClick={() => {
                          dispatch(clearUsers());
                          localStorage.removeItem("Token");
                        }}
                        className="lg:ml-40 bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-1"
                      >
                        Logout
                      </button>
                    </Link>
                  </div>
                  {/* Copyright */}
                  <p className="my-4 font-bold text-center">
                    <span>Copyright © 2023-24</span>
                  </p>
                </div>
              </nav>
            </div>
          </>
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
      </nav>
    </>
  );
};

export default Navbar;
