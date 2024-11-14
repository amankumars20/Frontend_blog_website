import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Appbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userInfo');
    const name = localStorage.getItem('Name');
    if (token) {
      setIsSignedIn(true);
      setUserName(name);
    }
  }, []);

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignOut = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('Name');
    setIsSignedIn(false);
    setUserName(null);
    console.log("User signed out and token removed");
    navigate('/');
  };

  return (
    <div className='border-b bg-gray-800 text-white flex justify-between items-center px-10 py-4'>
      <Link className='text-2xl font-bold cursor-pointer' to={'/blogs'}>
        Blogs
      </Link>
      {isSignedIn && userName ? (
        <div className='text-lg font-medium'>Hello, {userName}!</div>
      ) : null}
      <div className="flex items-center space-x-4">
        <Link to={'../Publish'}>
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5"
          >
            New
          </button>
        </Link>
        {isSignedIn ? (
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2.5"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
