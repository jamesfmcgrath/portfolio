import React from 'react';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4 md:px-8 lg:px-16'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
        About Me
      </h1>
      <p className='mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-xl'>
        With over 20 years of experience in web development, I specialize in
        front-end development, focusing on creating highly usable and scalable
        websites. My passion for web development is fueled by the satisfaction
        of transforming complex problems into simple, beautiful, and intuitive
        interface designs.
      </p>
      <p className='mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-xl'>
        I have a strong background in working with Drupal and WordPress, and my
        skills include JavaScript, React/Redux, CSS/SASS, HTML, and PHP. Over
        the years, I have worked on hundreds of websites, including large-scale
        enterprise projects for government agencies, libraries, and large
        businesses.
      </p>
      <p className='mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-xl'>
        My approach to web development is always centered around the user,
        ensuring that every site I work on is visually appealing and easy to
        navigate and use. I always seek new challenges and opportunities to
        apply my skills and experience to help businesses create the best online
        presence possible.
      </p>
    </div>
  );
};

export default AboutPage;
