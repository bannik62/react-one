import React, { useState } from 'react';
import Regex from '../Regex';

const Signupform = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('');

    const inscription = () => {
        if (Regex.password.test(nom) && Regex.password.test(prenom) && Regex.email.test(email)) {
            console.log(inscription)
            return
        }

        const payload = {nom,prenom,email}
        console.log(payload)
        alert("inscription coming soon vous serez prévenu a l'adresse "+payload.nom )

    }


    return (
        <form lassName="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="nom">
                    Nom
                </label>
                <input
                    type="text"
                    className="border p-2 w-full"
                    id="nom"
                    name="nom"
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="prenom">
                    Prénom
                </label>
                <input
                    type="text"
                    className="border p-2 w-full"
                    id="prenom"
                    name="prenom"
                    onChange={(e) => setPrenom(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">
                    E-mail
                </label>
                <input
                    type="email"
                    className="border p-2 w-full"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button
                type="button"
                onClick={inscription()}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                S'inscrire
            </button>
        </form>
    );
};

export default Signupform;
