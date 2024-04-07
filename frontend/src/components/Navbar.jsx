import React from 'react';
import { useNavigate } from "react-router-dom";

function Navbar({profile}) {

    const navigate = useNavigate()
    const handleLogout = () => {
        // Logout logic here
        console.log("Logging out...");
        navigate('/')
    };

    const handleProfile = () => {
        // Profile logic here
        console.log("Viewing profile...");
    };

    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="text-white text-lg font-semibold">{profile.username}</a>
                    </div>
                    {/* Profile */}
                    <div className="flex items-center">
                        <button onClick={handleProfile} className="relative flex items-center justify-center h-10 w-10 mr-4 bg-yellow-400 text-gray-800 rounded-full border-2 border-yellow-500 hover:bg-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4a4 4 0 100 8 4 4 0 000-8z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 16v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1" />
                            </svg>
                        </button>
                        <button onClick={handleLogout} className="text-white hover:bg-green-500 px-3 py-2 rounded-md">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
