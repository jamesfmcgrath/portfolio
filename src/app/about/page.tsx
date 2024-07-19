import React from 'react';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800'>About Me</h1>
      <p className='mt-4 text-lg text-center text-gray-600 max-w-xl'>
        This is the about page. Here you will find information about me.
      </p>
    </div>
  );
};

export default AboutPage;
