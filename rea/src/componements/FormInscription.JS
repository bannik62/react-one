import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        ville: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Traitement des données soumises ici
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="ville">Ville</label>
                <input
                    type="text"
                    className="form-control"
                    id="ville"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Soumettre</button>
        </form>
    );
};

export default SignupForm;
