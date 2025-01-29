import React from 'react'

const Navbar1 = () => {
  return (
   <>
   <div>
   <div className="w-full overflow-hidden   bg-gradient-to-r from-pink-400 via-purple-500 to-rose-400 p-3">
        <div className="animate-marquee whitespace-nowrap">
          <p className="inline-block text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mx-5 sm:mx-10  font-semibold duration-1000">
          Your Next Great Read is Waiting – Shop Now & Save! 
          </p>
          <p className="inline-block text-sm sm:text-base md:text-lg mx-5 sm:mx-10  font-semibold duration-1000">
          Discover Top Reads – Save Up to 50% Today! 
          </p>
          <p className="inline-block text-sm sm:text-base md:text-lg mx-5 sm:mx-10  font-semibold duration-1000">
          Don’t Miss Out – Bestselling Books at Half Price!
          </p>
        </div>
      </div>
   </div>
   </>
  )
}

export default Navbar1;
