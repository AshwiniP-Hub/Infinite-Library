import React from 'react'
import wishlist from "../../public/Images/wishlist.jpg";
import { Link } from 'react-router-dom';

const Wishlistpage = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <div>
        <img src={wishlist} alt="error" className='size-48 mt-4' />
        </div>
        <div>
        <h1 className='md:text-xl text-xs md:mt-4 mt-5'>Your wishlist is empty. Browse now and pick something you love!</h1>
        </div>
        <div>
             <Link to='/'> <button className='bg-rose-500 rounded-md text-xl  px-4 py-1 mt-4 mb-4'>Shop Now</button></Link>
            </div>
    </div>
    </>
  )
}

export default Wishlistpage