import React, { useState } from 'react';
import Regex from '../Regex';

const Loginform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const connexion = () => {
        if(!Regex.email.test(email) && Regex.password.test(password)) {
            console.log("Veuillez respecté les caractéres admis")
            return;
        } 
        const payload = {email,password};
        console.log(payload);
        alert("inscription coming soon vous serez prévenu a l'adresse "+payload.email )
    }
    return (
        <form  className="flex flex-col items-center mt-10">
            <div className=" items-center justify-center ">
                <div className="flex flex-col items-center py-2">
                    <label htmlFor="email" className="text-lg">Email</label>
                    <input
                        type="email"
                        className="border border-gray-400 rounded p-2 mt-2"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center py-2">
                    <label htmlFor="password" className="text-lg">Mot de passe</label>
                    <input
                        type="password"
                        className="border border-gray-400 rounded p-2 mt-2"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="button" onClick={()=>connexion()} className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 mxauto 1mt-4 items-center">Se connecter</button>
                </div>
            </div>
        </form>
    );
};

export default Loginform;
