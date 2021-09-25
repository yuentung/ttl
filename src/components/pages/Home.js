import React from 'react';
import Navbar from '../organisms/Navbar';
import Swiper from '../organisms/Swiper';
import Intro from '../organisms/Intro';
import About from '../organisms/About';
import Products from '../organisms/Products';
import Footer from '../organisms/Footer';

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