import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className='container-fluid  flex mx-auto justify-between border-2 border-black '>
                <div className=' w-25' >
                    <img  className='w-1/2' src="./assets/img/main.jpg" alt="logo" />
                </div>
                    <ul className='w-50'>
                        
                        <NavLink to="/"><li>Acceuil</li></NavLink>
                        <NavLink to="/About"><li>About</li></NavLink>

                    </ul>
                <div className="w-25" >
                    <div className="btn">inscription </div>
                    <div className="btn">connexion </div>
                    <div className="btn">deconnexion </div>
                </div>
            </nav>
        
    );
};

export default Navbar;

