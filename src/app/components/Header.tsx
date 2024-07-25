import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-2xl font-bold">
                    <Link href="/">Your Name</Link>
                </div>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
