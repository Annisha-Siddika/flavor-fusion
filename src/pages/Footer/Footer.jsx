import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} Flavor fusion. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;