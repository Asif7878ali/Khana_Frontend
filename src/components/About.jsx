import { Link } from 'react-router-dom'

const About = () => {

  const token = localStorage.getItem('Token');
  const isLogin = JSON.parse(token);

  
  return (
    <>
     { isLogin ? (
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
            </div>
            <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
                <Link to="/"><button className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium ">Play Store</button></Link>
                <Link to="/"><button className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white">App Store</button></Link>              
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
  )
}

export default About