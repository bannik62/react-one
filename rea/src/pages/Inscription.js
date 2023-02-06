import React from 'react';
import Navbar from '../componements/Navbar';
import Footer from '../componements/Footer';
import Signupform from '../componements/forms/Forminscription';

const Inscription = () => {
    return (
        <div className='container-fluid justify-center'>
            <Navbar />
            <p>inscription</p>
            <Signupform />
            <Footer />
        </div>
    );
};

export default Inscription;