const About = () => {
  const token = localStorage.getItem("Token");
  const isLogin = JSON.parse(token);

  return (
    <>
      {isLogin ? (
        <div className="flex flex-col bg-yellow-200 items-center justify-start font-sans min-h-96 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
          <div>
            <p className="p-3 pt-12 text-3xl font-bold">Khana-Khazana</p>
          </div>
          <div>
            <p className="p-2 text-2xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl">
              Why stay hungry when you can order from Khana-Khazana
            </p>
          </div>
          <div>
            <p className="p-4 pt-6 font-bold text-2xl leading-10 text-center">
              Download the Khana-Khazana food app now on
            </p>

            <button className="pt-3 mb-6 ml-24 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium ">
              Play Store
            </button>
           
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Please Login</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
