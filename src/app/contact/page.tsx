import React from 'react';

const ContactPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4 md:px-8 lg:px-16'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
        Contact Me
      </h1>
      <p className='mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-xl'>
        Get in touch with me by filling out the form below.
      </p>
      <form className='mt-6 w-full max-w-lg'>
        <div className='flex flex-col space-y-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <textarea
            placeholder='Your Message'
            rows={4}
            className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
