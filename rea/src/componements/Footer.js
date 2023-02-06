import React from 'react';

const footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <p className="text-sm">&copy; 2021 Mon entreprise</p>
                        <ul className="flex items-center">
                            <li className="mx-4">
                                <a href="#" className="text-white hover:text-gray-400">A propos</a>
                            </li>
                            <li className="mx-4">
                                <a href="#" className="text-white hover:text-gray-400">Blog</a>
                            </li>
                            <li className="mx-4">
                                <a href="#" className="text-white hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default footer;