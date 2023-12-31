import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
  
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        
          
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt='error'/>
          </div>
      
          
            <h1 className="my-5 text-gray-800 font-bold text-2xl">
              Looks like you've found the
              doorway to the great nothing
            </h1>
            <p className=" text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
            <div className="my-5">
            <Link to="/" className="sm:w-full lg:w-auto my-5 border rounded md py-4 px-8 text-center bg-blue-600 text-white hover:bg-blue-700 ">Take me there!</Link>
        </div>
        
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt='error' />
      </div>
    </div>
  )
}

export default ErrorPage