import React from 'react'

const Navbar1 = () => {
  return (
   <>
   <div>
   <div className="w-full overflow-hidden bg-gradient-to-r from-pink-400 via-purple-500 to-rose-400 p-3">
        <div className="animate-marquee whitespace-nowrap">
          <p className="inline-block text-lg font-semibold duration-1000 text-black mx-10">
          Your Next Great Read is Waiting – Shop Now & Save! 
          </p>
          <p className="inline-block text-lg font-semibold duration-1000 mx-10 text-black">
           Discover Top Reads – Save Up to 50% Today! 
          </p>
          <p className="inline-block text-lg font-semibold duration-1000 mx-10 text-black">
          Don’t Miss Out – Bestselling Books at Half Price!
          </p>
        </div>
      </div>
   </div>
   </>
  )
}

export default Navbar1;
