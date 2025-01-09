import React from 'react'
import instagram from "../../public/Images/instagram.png"
import facebook from "../../public/Images/facebook.png"
import twitter from "../../public/Images/twitter.png"
import books from "../../public/Images/books.png"
import delivery from "../../public/Images/delivery.png"
import quality from "../../public/Images/quality.png"
import price from "../../public/Images/price.png"
import logo from "../../public/Images/logo.png"



const Footer = () => {
  return (
   <>
   <div className='p-5 bg-slate-200'>
        {/* logo  */}
        <div className='flex flex-col justify-center items-center'>
                <img src={logo} alt="logo" className='size-32' />
                <div className='flex items-center font-bold text-2xl uppercase text-pink-500'>Infinite Library</div>
        </div>
        {/* button  */}
        <div className='flex justify-center m-5'>
                <button className='mx-2 px-8 py-2  border-none rounded-3xl  bg-pink-500 font-bold text-lg text-white hover:-translate-y-2 duration-150 hover:bg-blue-600 '>Contact Us</button>
                </div>
        {/* icons  */}
        <div className='flex justify-center m-8 gap-6 font-semibold'> 
        <div>
                <div><img src={books} alt="books img" className='size-16 mx-4' /></div>
                <div>Millions of Books</div>
        </div>
        <div>
                <div><img src={quality} alt="books img" className='size-16 mx-4' /></div>
                <div>Genuine Books</div>
        </div>
        <div>
                <div><img src={price} alt="books img" className='size-16 mx-2' /></div>
                <div>Great Pricing</div>
        </div>
        <div>
                <div><img src={delivery} alt="books img" className='size-16 mx-4' /></div>
                <div>Faster Delivery</div>
        </div>
        </div>
   
        {/* connect with us  */}
        <div className='flex justify-center font-semibold'>
                <p>Coonect With Us</p>
        </div>
        <div className=' flex justify-center m-4 gap-6'>
            <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="errror" className='size-10'  />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="errror" className='size-10'/>
            </a>
            <a href="https://x.com/i/flow/login" target="_blank">
                    <img src={twitter} alt="errror" className='size-10'/>
            </a>     
        </div>
        {/* for line  */}
        <hr  />
        {/* copyright  */}
        <div className='flex justify-center py-4 font-semibold'>CopyRight @ 2024 by Infinte Library</div>
   </div>
   </>
  )
}

export default Footer
