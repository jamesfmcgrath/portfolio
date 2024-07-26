"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-gray-800 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-2xl font-bold">
                    <Link href="/">Your Name</Link>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-gray-800 text-white">
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
                    <Link href="/projects" className="block px-4 py-2 hover:bg-gray-700">Projects</Link>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
