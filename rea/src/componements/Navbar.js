import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='container-fluid bg-gray-900 text-white py-12 flex mx-auto justify-between border-2 border-black'>
            <div className='' >
                <img className='' src="./assets/img/main.jpg" alt="logo" />
            </div>
            <ul className='w-50'>

                <li><NavLink to="/">Acceuil</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>

            </ul>
            <div className="w-25" >
                <div className="bg-blue-500 hover:bg-blue-700">
                    <NavLink to="/Inscription">Inscription</NavLink>
                </div>

                <div className="bg-blue-500 hover:bg-blue-700">
                    <NavLink to="/Connexion" >login </NavLink>
                </div>

                <div className="btn">
                    deconnexion
                </div>
            </div>
        </nav>

    );
};

export default Navbar;

