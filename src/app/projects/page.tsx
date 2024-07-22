import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One.',
      link: '/projects/1',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      link: '/projects/2',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      link: '/projects/3',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4 md:px-8 lg:px-16'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
        Projects
      </h1>
      <div className='mt-6 w-full max-w-4xl'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='mb-8 p-4 border rounded-md bg-white shadow-md'
          >
            <h2 className='text-2xl font-bold text-gray-800'>
              {project.title}
            </h2>
            <p className='mt-2 text-base sm:text-lg md:text-xl text-gray-600'>
              {project.description}
            </p>
            <a
              href={project.link}
              className='mt-4 inline-block text-blue-500 hover:underline'
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
