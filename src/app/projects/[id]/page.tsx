'use client'; // Add this line at the top

import { useParams } from 'next/navigation';
import React from 'react';

const ProjectDetailPage = () => {
  const params = useParams();
  const { id } = params;

  const projectDetails = {
    1: {
      title: 'Project One',
      description: 'Detailed description of Project One.',
      content: 'More information about Project One...',
    },
    2: {
      title: 'Project Two',
      description: 'Detailed description of Project Two.',
      content: 'More information about Project Two...',
    },
    3: {
      title: 'Project Three',
      description: 'Detailed description of Project Three.',
      content: 'More information about Project Three...',
    },
  };

  const project = projectDetails[id as unknown as keyof typeof projectDetails];

  if (project) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4 md:px-8 lg:px-16'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
          {project.title}
        </h1>
        <p className='mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-2xl'>
          {project.description}
        </p>
        <div className='mt-6 text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl'>
          {project.content}
        </div>
        <a href='/projects' className='mt-6 text-blue-500 hover:underline'>
          Back to Projects
        </a>
      </div>
    );
  } else {
    console.error('Project not found for the given ID');
  }
};

export default ProjectDetailPage;
