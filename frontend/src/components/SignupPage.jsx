import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const usernameInputRef = useRef(null); // Create a ref for the username input

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching users:', error));
        
        // Focus the cursor on the username input field when the component mounts
        usernameInputRef.current.focus();
    }, []);

    function signupHandler() {
        const { username, email, password } = formData;

        if (users.some(user => user.username === username || user.email === email)) {
            alert('User already exists');
        } else {
            fetch('http://localhost:3001/signup', {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to sign up');
                    }
                    return response.json();
                })
                .then(data => {
                    alert('Signed up');
                    navigate('/');
                })
                .catch(error => console.error('Error signing up:', error));
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signupHandler();
        setFormData({
            username: '',
            email: '',
            password: ''
        });
    };

    const handleLogin = () => {
        console.log('Redirecting to login page...');
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
            <div className="w-full max-w-md bg-green-500 p-8 rounded-lg shadow-xl transform hover:rotate-3 transition-transform duration-300">
                <h2 className="text-2xl font-semibold mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                            required 
                            ref={usernameInputRef} // Assign the ref to the username input
                            className="mt-1 block w-full rounded-md bg-gray-200 text-gray-800 border border-transparent focus:outline-none focus:border-gray-400 focus:bg-white focus:text-gray-900"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 block w-full rounded-md bg-gray-200 text-gray-800 border border-transparent focus:outline-none focus:border-gray-400 focus:bg-white focus:text-gray-900"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 block w-full rounded-md bg-gray-200 text-gray-800 border border-transparent focus:outline-none focus:border-gray-400 focus:bg-white focus:text-gray-900"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-green-700 hover:bg-green-600 py-2 px-4 rounded focus:outline-none focus:bg-green-600"
                    >
                        Signup
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Already have an account? <button onClick={handleLogin} className="text-blackbg-green-700 hover:bg-green-600 py-2 px-4 rounded focus:outline-none focus:bg-green-600 transform hover:translate-y-1 transition duration-300">Login</button></p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
