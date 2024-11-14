import React from 'react';

export const Quote = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg'>
        <div className='text-3xl font-bold text-center text-gray-900'>
          "The only way to do great work is to love what you do."
        </div>
        <div className='mt-4 text-center text-lg font-light text-slate-400'>
          — Steve Jobs
        </div>
      </div>
    </div>
  );
};

export default Quote;
