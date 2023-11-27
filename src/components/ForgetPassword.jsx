import React from 'react'

const ForgetPassword = () => {
  return (
    <>
    <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
         
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            
              <form className="space-y-4 md:space-y-6" action="">

                       {/* Name */}
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">New Password</label>
                  <input type="password" name="password" id="password" autoComplete=""
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600  block w-full p-2.5"
                    placeholder="••••••••" required />
                       
                </div>

                     {/* Password */}
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Confirm Password</label>
                    <div className="relative">
                    <input type='password' name="confirm_password" id="confirm_password" placeholder="••••••••" autoComplete=""
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg   block w-full p-2.5 "required/>
                  </div>
                      
                </div>
                
                       {/* Button */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirm</button>
               
              </form>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default ForgetPassword