import React from 'react';
import Navbar from '../components/Navbar';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import HelpCenter from '../components/HelpCenter';

const HelpCenters = () => {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <Navbar/>
    <HelpCenter/>
    <Footer/>
    </>
  )
}

export default HelpCenters