import React, { useEffect, useRef } from 'react';

function LoginPage() {
    const usernameInputRef = useRef(null);

    useEffect(() => {
        // Focus the username input field when the component mounts
        usernameInputRef.current.focus();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" id="username" name="username" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500" ref={usernameInputRef} required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500" required />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>

                    <div className="mt-4 flex justify-between">
                        <a href="/signup" className="text-blue-500 hover:text-blue-600">Sign Up</a>
                        <a href="/forgotpassword" className="text-blue-500 hover:text-blue-600">Forgot Password</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
