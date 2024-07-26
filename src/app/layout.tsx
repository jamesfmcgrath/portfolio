import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Header />
                    <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
