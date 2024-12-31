import React from 'react';
import HeroSection from '../component/HeroSection';
import Cryptolide from '../component/Cryptolide';
import Trending from '../component/Trending';
import Member from '../component/Member';
import Live from '../component/Live';
import Works from '../component/Works';
import Sell from '../component/Sell';
import Testimonial from '../component/Testimonial';
import Supports from '../component/Supports';
import Footer from '../footer/Footer';

function Homepage() {
   
  return (
    <>
    
     <HeroSection/>
     <Cryptolide/>
     <Trending/>
     <Member/>
     <Live/>
     <Works/>
     <Sell/>
     <Testimonial/>
     <Supports/>
     <Footer/>
    </>
  )
}

export default Homepage
