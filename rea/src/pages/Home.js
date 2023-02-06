import React from 'react';
import Navbar from '../componements/Navbar';
import Main from '../componements/Main';
import Footer from '../componements/Footer';

const Home = () => {
    return (
        <div className='container-fluid justify-center'>
            <Navbar />
            <p>Home</p>
            <Main />
            <Footer /> 
        </div>
    );
};

export default Home;