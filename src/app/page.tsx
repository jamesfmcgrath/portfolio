import React from 'react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <h1 className='text-5xl font-bold text-gray-800'>Your Name</h1>
      <p className='mt-4 text-lg text-center text-gray-600 max-w-xl'>
        Brief bio goes here. You can write a few lines about yourself, your
        skills, and what you do. Make sure to highlight your unique strengths
        and experiences.
      </p>
      <div className='mt-6'>
        <a href='/projects'>
          <Button className='mr-4'>View my projects</Button>
        </a>
        <a href='/about'>
          <Button className='mr-4'>About Me</Button>
        </a>
        <a href='/contact'>
          <Button>Contact Me</Button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
