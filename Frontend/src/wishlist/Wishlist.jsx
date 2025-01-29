import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import WishlistPage from '../components/Wishlistpage';

const Wishlist = () => {
  return (
   <>
   <Navbar1/>
<Navbar2/>
   <Navbar/>
    <WishlistPage/>
   <Footer/>
   </>
  )
}

export default Wishlist