import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand / Logo */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-bold">Priyansha Tiwari</h1>
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
