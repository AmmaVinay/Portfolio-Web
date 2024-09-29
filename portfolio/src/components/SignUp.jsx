import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";
 
function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Password don't match")
        } 
        try {
            const response = await axios.post('http://localhost:5000/signup', { name, email, password });
            setMessage(response.data.message)
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                 console.log("Token stored in local storage:", response.data.token);
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('')
                navigate('/login')
            }
        } catch (error) {
            setMessage('An error occurred while submitting the form*')   
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-600 flex flex-col justify-center items-center py-6">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                
            <form onSubmit={handleSubmit} method="POST">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-4 px-6 text-white">
                        <h1 className="text-2xl text-center font-semibold text-white">Sign Up</h1>
                    </div>
                    <div className="py-8 px-6">
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-purple-600">
                                <FaUserCircle className="text-gray-400 mr-2" /> 
                                <input
                                    value={email}
                                    onChange={(e) => setName(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="peer placeholder-gray-400 placeholder-opacity-50 h-10 w-full text-gray-900 focus:outline-none"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-purple-600">
                                <FaEnvelope className="text-gray-400 mr-2" />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="peer placeholder-gray-400 placeholder-opacity-50 h-10 w-full text-gray-900 focus:outline-none"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                        </div>
                         <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-purple-600">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="peer placeholder-gray-400 placeholder-opacity-50 h-10 w-full text-gray-900 focus:outline-none"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>
                         <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-purple-600">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    id="password"
                                    name="Confirm Password"
                                    type="password"
                                    className="peer placeholder-gray-400 placeholder-opacity-50 h-10 w-full text-gray-900 focus:outline-none"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>
                        {message && <p className="text-red-500 mb-3">{message}</p>}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-purple-600 w-1/2 text-white rounded-md px-4 py-2 hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-400 transition duration-200"
                            >
                                Sign UP
                            </button>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#FBBC05" d="M9.83,24C9.83,22.48 10.08,21.01 10.53,19.64L2.62,13.6C1.08,16.73 0.21,20.26 0.21,24C0.21,27.74 1.08,31.26 2.62,34.39L10.52,28.34C10.08,26.97 9.83,25.52 9.83,24Z"></path>
                                    <path fill="#EB4335" d="M23.71,10.13C27.03,10.13 30.02,11.31 32.37,13.23L39.2,6.4C35.04,2.77 29.7,0.53 23.71,0.53C14.43,0.53 6.45,5.84 2.62,13.6L10.53,19.64C12.35,14.11 17.55,10.13 23.71,10.13Z"></path>
                                    <path fill="#34A853" d="M23.71,37.87C17.55,37.87 12.35,33.89 10.53,28.36L2.62,34.39C6.45,42.16 14.43,47.47 23.71,47.47C29.45,47.47 34.92,45.43 39.02,41.62L31.52,35.81C29.4,37.15 26.73,37.87 23.71,37.87Z"></path>
                                    <path fill="#4285F4" d="M46.15,24C46.15,22.61 45.93,21.12 45.61,19.73L23.71,19.73L23.71,28.8L36.32,28.8C35.69,31.89 33.97,34.27 31.52,35.81L39.02,41.62C43.34,37.61 46.15,31.65 46.15,24Z"></path>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Sign In</Link>
                        </div>
                    </div>
            </form>
                </div>
        </div>
    );
}

export default SignUp;
