// components/SimpleNavbar.jsx
import React from 'react';
import { 
  FaHome, 
  FaProjectDiagram, 
  FaUserTie, 
  FaTools,
  FaBlog 
} from 'react-icons/fa';

const SimpleNavbar = () => {
  const navItems = [
    { id: 'home', icon: <FaHome className="w-5 h-5" />, label: 'Home' },
    { id: 'projects', icon: <FaProjectDiagram className="w-5 h-5" />, label: 'Projects' },
    { id: 'experience', icon: <FaUserTie className="w-5 h-5" />, label: 'Experience' },
    { id: 'tools', icon: <FaTools className="w-5 h-5" />, label: 'Tools' },
    { id: 'blogs', icon: <FaBlog className="w-5 h-5" />, label: 'Blogs' }
  ];

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="flex justify-center space-x-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="text-white hover:text-blue-400 transition-colors duration-200 p-2"
            aria-label={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SimpleNavbar;