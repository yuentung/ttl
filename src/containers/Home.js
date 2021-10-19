import React from 'react';
import Navbar from '../components/Navbar';
import Swiper from '../components/organisms/Swiper';
import Intro from '../components/organisms/Intro';
import About from '../components/organisms/About';
import Products from '../components/organisms/Products';
import Footer from '../components/organisms/Footer';

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
