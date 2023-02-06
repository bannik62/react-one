import React from 'react';
import Navbar from '../componements/Navbar';
import Footer from '../componements/Footer';
import Loginform from '../componements/forms/Formlogin';


const login = () => {
    return (
        <div className='container-fluid justify-center'>
            <Navbar />
            <p>connexion</p>
            <Loginform />
            <Footer />
        </div>
    );
};

export default login;