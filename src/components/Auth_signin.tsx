import { SigninInput } from '@amankumars20/blog-website-common_new';
import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const Auth_signin = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SigninInput>({ email: "", password: "" });

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs);
            const data = response.data;
            localStorage.setItem("userInfo", data.jwt);
            localStorage.setItem("Name", data.name);
            navigate("../Blogs");
        } catch (error) {
            alert("Don't cry");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
            <div className="bg-white rounded-lg shadow-lg p-10 w-96">
                <div className='text-3xl font-extrabold text-center text-gray-800 mb-6'>
                    Sign in to your account
                </div>
                <div className='text-slate-400 text-center mb-6'>
                    Don’t have an account? 
                    <Link className="pl-2 underline text-indigo-600" to={type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
                <LabelledInput 
                    label="Email" 
                    placeholder="Email" 
                    onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })}
                />
                <LabelledInput 
                    label="Password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
                />
                <button 
                    onClick={handleSubmit} 
                    type="button" 
                    className="mt-8 w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
                >
                    {type === "signup" ? "Sign up" : "Sign in"}
                </button>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default Auth_signin;
