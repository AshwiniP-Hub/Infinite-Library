import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../public/Images/logo.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
        return (
                <>

                 <div className="footer flex flex-col md:flex-row justify-center items-center md:justify-between md:px-10 px-10 bg-base-200 md:pt-10 md:pb-10 pb-10 pt-4" >
                         {/* <footer className="footer  md:px-10 px-10 bg-base-200 md:pt-10 md:pb-10 pt-4 "> */}
                                <div className='flex flex-col  justify-center  items-center'>
                                        <img src={logo} alt="logo" className='md:size-24 size-10' />
                                        <div className=' font-bold md:text-2xl text-xs uppercase text-pink-500'>Infinite Library</div>
                                </div>
                                <div>
                                <h6 className="footer-title">Finds</h6>
                                      <Link className="link link-hover" to="/" >About us</Link> 
                                      <Link className="link link-hover" to="/" >Payments</Link> 
                                        <Link className="link link-hover" to="/help-center" >Help center</Link> 
                                        <Link className="link link-hover" to="/RequestBook" >Request book</Link> 
                                </div>
                                <div>
                                <h6 className="footer-title">Categaries</h6>
                                       <Link className="link link-hover" to="/Fiction" > Fiction</Link> 
                                        <Link className="link link-hover" to="/NonFiction" >Non-Fiction</Link> 
                                               <Link className="link link-hover" to="/Children" > Children</Link> 
                                                <Link className="link link-hover" to="/Education" >Education</Link> 
                                                </div>
                                        <div>
                                                <h6 className="footer-title">Social</h6>
                                                <div className=' flex justify-center gap-2'>
                                                        <a href="https://www.instagram.com/" target="_blank">
                                                                <FaInstagramSquare className='size-7 text-slate-500' />
                                                        </a>
                                                        <a href="https://www.facebook.com/" target="_blank">
                                                                <FaFacebookSquare className='size-7 text-slate-500' />
                                                        </a>
                                                        <a href="https://x.com/i/flow/login" target="_blank">
                                                                <FaSquareXTwitter className='size-7 text-slate-500' />
                                                        </a>
                                                </div>
                                                </div>
                         {/* </footer> */}
                         </div>
                                <footer className="footer footer-center  bg-base-300 text-base-content p-4">
                                        <aside>
                                                <p>Copyright © {new Date().getFullYear()} - All right reserved by Infinte Library Ltd</p>
                                        </aside>
                                </footer>
                        
                </>
        )
}

export default Footer
