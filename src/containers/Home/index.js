import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Swiper from './Swiper';
import Intro from './Intro';
import About from './About';
import Products from './Products';

const Home = () => {
  return (
    <>
      <Navbar />
      <Swiper />
      <Intro />
      <About />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
