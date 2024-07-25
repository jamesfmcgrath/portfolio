"use client"; // Add this line at the top

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
            technologies: 'React, Next.js, Tailwind CSS',
            github: 'https://github.com/yourusername/project-one',
            liveDemo: 'https://project-one.vercel.app'
        },
        2: {
            title: 'Project Two',
            description: 'Detailed description of Project Two.',
            content: 'More information about Project Two...',
            technologies: 'React, Next.js, Tailwind CSS',
            github: 'https://github.com/yourusername/project-two',
            liveDemo: 'https://project-two.vercel.app'
        },
        3: {
            title: 'Project Three',
            description: 'Detailed description of Project Three.',
            content: 'More information about Project Three...',
            technologies: 'React, Next.js, Tailwind CSS',
            github: 'https://github.com/yourusername/project-three',
            liveDemo: 'https://project-three.vercel.app'
        }
    };

    const project = projectDetails[id as unknown as keyof typeof projectDetails];

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">{project.title}</h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-2xl">
                {project.description}
            </p>
            <div className="mt-6 text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl">
                {project.content}
            </div>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-2xl">
                <strong>Technologies Used:</strong> {project.technologies}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <a href={project.github} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
                <a href={project.liveDemo} className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600" target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
            </div>
            <a href="/projects" className="mt-6 text-blue-500 hover:underline">
                Back to Projects
            </a>
        </div>
    );
};

export default ProjectDetailPage;
