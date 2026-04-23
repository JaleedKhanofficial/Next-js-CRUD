import React from "react";
import { loginAction } from "../actions/auth";

const LogInForm = () => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
            <form action={loginAction} className="space-y-4">
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LogInForm;