import React from 'react'
import { Link } from 'react-router-dom';
import cart from "../../public/Images/cart.png";

const Cart = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <div>
        <img src={cart} alt="error" className='size-48 mt-4' />
        </div>
        <div>
        <h1 className='text-xl mt-4'>Your Cart is empty. Browse now and pick something you love!</h1>
        </div>
        <div>
             <Link to='/'> <button className='bg-rose-500 rounded-md text-xl  px-4 py-1 mt-4 mb-4'>Shop Now</button></Link>
            </div>
    </div>
    </>
  )
}

export default Cart