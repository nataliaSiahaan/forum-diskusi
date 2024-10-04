import React, { useState } from 'react';
// Import icon dari react-icons
import { FaHome } from 'react-icons/fa';
import { RiFilePaper2Fill, RiDiscussFill } from 'react-icons/ri';
import logoWecare from '../assets/logoWecare.png';

const Sidebar = () => {
  // State untuk toggle sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-20'} bg-pink-300 transition-all duration-300 shadow-lg rounded-r-xl`}>
      <div className="flex flex-col items-center py-4">
        {/* Klik pada logo untuk membuka atau menutup sidebar */}
        <img
          src={logoWecare}
          className="w-10 h-10 cursor-pointer"
          onClick={toggleSidebar}
          alt="WeCare Logo"
        />
        {isOpen && <h1 className="absolute left-16 top-4 text-2xl font-bold text-white">WeCare</h1>}
      </div>
      <ul className="mt-10 space-y-4">
        {/* Menu Home dengan ikon FaHome */}
        <li className="flex items-center justify-center p-2 hover:bg-pink-400 cursor-pointer">
          <FaHome className="text-red-600 text-2xl" />
          {isOpen && <span className="absolute left-16 text-white">Home</span>}
        </li>
        {/* Menu Test dengan ikon RiFilePaper2Fill */}
        <li className="flex items-center justify-center p-2 hover:bg-pink-400 cursor-pointer">
          <RiFilePaper2Fill className="text-red-600 text-2xl" />
          {isOpen && <span className="absolute left-16 text-white">Test</span>}
        </li>
        {/* Menu Komunitas dengan ikon RiDiscussFill */}
        <li className="flex items-center justify-center p-2 hover:bg-pink-400 cursor-pointer">
          <RiDiscussFill className="text-red-600 text-2xl" />
          {isOpen && <span className="absolute left-16 text-white">Komunitas</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
