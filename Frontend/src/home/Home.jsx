import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Homepage from '../components/Homepage';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';

const Home = () => {
  return (
   <>
   <Navbar1/>
   <Navbar2/>
   <Navbar/>
   <Homepage/>
   <Footer/>
   </>
  )
}

export default Home