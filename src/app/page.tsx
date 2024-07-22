import React from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4 md:px-8 lg:px-16'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
        James McGrath
      </h1>
      <p className='mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-xl'>
        My approach to web development is always centered around the user,
        ensuring that every site I work on is visually appealing and easy to
        navigate and use. I always seek new challenges and opportunities to
        apply my skills and experience to help businesses create the best online
        presence possible.
      </p>
      <div className='mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
        <a
          href='/projects'
          className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-center'
        >
          View my projects
        </a>
        <a
          href='/about'
          className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-center'
        >
          About Me
        </a>
        <a
          href='/contact'
          className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-center'
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default HomePage;
