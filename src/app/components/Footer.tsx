import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://github.com/yourusername" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400 ml-2" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <a href="https://twitter.com/yourusername" className="hover:text-gray-400 ml-2" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
