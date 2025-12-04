import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-surface py-8 border-t border-border transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-muted">
                    © {new Date().getFullYear()} Uttej Terlapu. All rights reserved.
                </p>
                <p className="text-muted text-sm mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
