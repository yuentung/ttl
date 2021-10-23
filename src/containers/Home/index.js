import React from 'react';
import Navbar from '../../components/Navbar';
import Swiper from './Swiper';
import Intro from './Intro';
import About from './About';
import Products from './Products';
import Footer from '../../components/organisms/Footer';

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
