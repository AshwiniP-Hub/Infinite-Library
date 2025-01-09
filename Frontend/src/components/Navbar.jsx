import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import education from "../../public/Images/education.jpg";
import fiction from "../../public/Images/fiction.jpg";
import nonficaton from "../../public/Images/non-fiction.jpg";
import children from "../../public/Images/children.jpg";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {

  // togglelist 
  const [isVisible, setIsVisible] = useState(false);

  const toggleList = () => {
    setIsVisible(!isVisible);
  };


  return (
    <>
      <div className='  flex  bg-white  sticky top-0 z-50 w-full   p-2 h-14'>
        <div className=' mx-4'>
          <ul className='flex  items-center justify-center gap-2 '>
            <li className='flex hover:font-bold items-center text-xl'>
              <Link className='flex' to="/">
                <AiOutlineHome className='font-semibold text-2xl hover:font-bold' />
                Home
              </Link>
            </li>&nbsp;
            <div className="h-8 w-[2px] bg-pink-700 "></div>&nbsp;

            <li className='flex items-center text-xl '>
              <div className='flex '><BiCategory className='font-semibold text-2xl  ' />
                <span className=' hover:font-bold '>Categories </span>
                <div className='flex justify-center items-center cursor-pointer ' ><FaBars onClick={toggleList}
                  className=' cursor-pointer text-sm ml-4 hover:font-bold' /></div>
                {/* Toggling List */}
                {isVisible && (
                  <ul className="absolute top-12 bg-white shadow-lg rounded-md p-2 px-10 pb-4 cursor-pointer"
                    style={{ minWidth: "150px" }}>
                    <li className='hover:font-semibold pb-2 '>
                      <Link className='flex' to="/Fiction"><div className='flex'>
                        <img src={fiction} alt="" className='size-10 rounded-full cursor-pointer' />
                        Fiction
                      </div> </Link>

                    </li>
                    <li className='hover:font-semibold pb-2 '>
                      <Link className='flex' to="/NonFiction">
                        <div className='flex'>
                          <img src={nonficaton} alt="" className='size-10 rounded-full cursor-pointer' />Non-Fiction
                        </div></Link>
                    </li>
                    <li className='hover:font-semibold pb-2 '>
                      <Link className='flex' to="/Children">
                        <div className='flex'>
                          <img src={children} alt="" className='size-10 rounded-full cursor-pointer' />Children
                        </div></Link>
                    </li>
                    <li className='hover:font-semibold pb-2  '>
                      <Link className='flex' to="/Education">
                        <div className='flex'>
                          <img src={education} alt="" className='size-10 rounded-full cursor-pointer' />Education
                        </div></Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>&nbsp;
            <div className="h-8 w-[2px] bg-pink-700">
            </div>&nbsp;
            <li className='flex items-center text-xl hover:font-bold'>
              <Link className='flex' to="/help-center">
                <FaUserTie className='font-semibold text-2xl hover:font-bold' />
                Help Center</Link></li>&nbsp;
            <div className="h-8 w-[2px] bg-pink-700"></div>&nbsp;
            <li className='flex items-center text-xl hover:font-bold'>
              <Link className='flex' to=" ">
                <IoCartOutline className='font-semibold text-2xl hover:font-bold' />
                Cart
              </Link></li>&nbsp;
            <div className="h-8 w-[2px] bg-pink-700"></div>&nbsp;
            <li className='flex items-center text-xl hover:font-bold'>
              <Link className='flex' to="/RequestBook ">
                <IoBookOutline className='font-semibold text-2xl hover:font-bold' />
                Request a Book
              </Link></li>&nbsp;
            <div className="h-8 w-[2px] bg-pink-700"></div>&nbsp;
            <li className='flex items-center text-xl hover:font-bold'>
              <Link className='flex' to="/Bestseller ">
                <GoTrophy className='font-semibold text-2xl hover:font-bold' />
                Best Seller
              </Link></li>&nbsp;
            <div className="h-8 w-[2px] bg-pink-700"></div>&nbsp;
            <li className='flex items-center text-xl hover:font-bold'>
              <Link className='flex' to=" ">
              <CiHeart className='font-semibold text-2xl hover:font-bold' />
                Wishlist
              </Link></li>&nbsp;
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
