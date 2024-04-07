import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailInputRef = useRef(null);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const contextObj = useContext(UserContext);

    useEffect(() => {
        emailInputRef.current.focus();
        fetch("http://localhost:3001/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => setUsers(data.users))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const foundUser = users.find((user) => user.email === email && user.password === password);
        if (foundUser) {
            contextObj.setUserOBJ(foundUser);
            navigate("/dashboard");
        } else {
            console.log("User not found");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-green-700 p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Login</h2>
                <div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:border-green-500 bg-gray-800 text-white"
                            ref={emailInputRef}
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:border-green-500 bg-gray-800 text-white"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>

                    <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600 w-full" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Login</button>

                    <div className="mt-4 flex justify-between">
                        <a href="/signup" className="text-white hover:text-green-600">Sign Up</a>
                        <a href="/forgotpassword" className="text-red-500 hover:text-green-600">Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
