import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  const err = useRouteError();
  // console.log(err)
  return (
    <>
      <section className="relative z-10 bg-white py-[120px]">
        <div className="container">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[30px] font-bold leading-none text-blue-700 sm:text-[80px] md:text-[55px]">
                  {err.status + ":" + err.statusText}
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-blue-700">
                  {err.data}
                </h4>
                <p className="mb-8 text-lg text-blue-700">
                  The page you are looking for it maybe deleted
                </p>
                <Link to="/"> <button className="inline-block px-8 py-3 text-base font-semibold text-center bg-blue-500 text-white transition border border-white rounded-lg hover:bg-blue-700 hover:text-primary">
                  Go to Home
                </button></Link>
               
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="flex w-1/3 h-full">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
      </section>
    </>
  );
};

export default Pagenotfound;
