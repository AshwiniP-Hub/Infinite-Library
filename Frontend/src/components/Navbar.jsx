import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import education from "../../public/Images/education.jpg";
import fiction from "../../public/Images/fiction.jpg";
import nonficaton from "../../public/Images/non-fiction.jpg";
import children from "../../public/Images/children.jpg";
import { CiHeart } from "react-icons/ci";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:text-xl lg:text-sm">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-6 absolute font-semibold  lg:static bg-white w-full lg:w-auto left-0 top-full lg:top-auto shadow-lg lg:shadow-none lg:translate-x-0 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className="py-2 px-4 font-semibold lg:py-0 hover:text-purple-500">
            <Link className='flex' to="/">
                            <AiOutlineHome className='font-semibold text-2xl hover:font-bold' />
                            Home
                          </Link>
                          {/* <a href="#">Home</a> */}
          </li>
          <li className="py-2 px-4 lg:py-0 flex font-semibold  hover:text-purple-500 relative">
          <BiCategory className='font-semibold text-2xl  ' /><button
              onClick={toggleCategories}
              className="flex items-center justify-between w-full lg:w-auto"
            > Categories
              <span className="ml-2">{isCategoriesOpen ? "▲" : "▼"}</span>
            </button>
            {/* Categories Dropdown */}
            {isCategoriesOpen && (
              <ul className="absolute left-0 top-full bg-white shadow-md mt-1 rounded-md w-40">
                <li className="px-4 py-2 hover:bg-gray-100">
                 <Link className='flex' to="/Fiction"><div className='flex'>
                                         <img src={fiction} alt="" className='size-10 rounded-full cursor-pointer' />
                                         Fiction
                                       </div> </Link>
                                        {/* <a href="#">Fiction</a> */}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
<Link className='flex' to="/NonFiction">
                        <div className='flex'>
                          <img src={nonficaton} alt="" className='size-10 rounded-full cursor-pointer' />Non-Fiction
                        </div></Link>
                        {/* <a href="#">Non-Fiction</a> */}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                   <Link className='flex' to="/Children">
                                          <div className='flex'>
                                            <img src={children} alt="" className='size-10 rounded-full cursor-pointer' />Children
                                          </div></Link>
                                          {/* <a href="#">Children</a> */}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
<Link className='flex' to="/Education">
                        <div className='flex'>
                          <img src={education} alt="" className='size-10 rounded-full cursor-pointer' />Education
                        </div></Link>
                        {/* <a href="#">Education</a> */}
                </li>
              </ul>
            )}
          </li>
          <li className="py-2 px-4 lg:py-0 hover:text-purple-500">
           <Link className='flex' to="/help-center">
                           <FaUserTie className='font-semibold text-2xl hover:font-bold' />
                           Help Center</Link>
                            {/* <a href="#">Help Center</a> */}
          </li>
          <li className="py-2 px-4 lg:py-0 hover:text-purple-500">
            <Link className='flex' to="/Cart ">
                            <IoCartOutline className='font-semibold text-2xl hover:font-bold' />
                            Cart
                          </Link>
                          {/* <a href="#">Cart</a> */}
          </li>
          <li className="py-2 px-4 lg:py-0 hover:text-purple-500">
            <Link className='flex' to="/RequestBook ">
                            <IoBookOutline className='font-semibold text-2xl hover:font-bold' />
                            Request a Book
                          </Link>
                          {/* <a href="#">Request a Book</a> */}
          </li>
          <li className="py-2 px-4 lg:py-0 hover:text-purple-500">
            <Link className='flex' to="/Bestseller ">
                            <GoTrophy className='font-semibold text-2xl hover:font-bold' />
                            Best Seller
                          </Link>
                          {/* <a href="#">Best Seller</a> */}
          </li>
          <li className="py-2 px-4 lg:py-0 hover:text-purple-500">
            <Link className='flex' to="/Wishlist ">
                          <CiHeart className='font-semibold text-2xl hover:font-bold' />
                            Wishlist
                          </Link>
                          {/* <a href="#">Wishlist</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
