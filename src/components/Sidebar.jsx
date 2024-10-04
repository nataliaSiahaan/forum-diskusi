import React, { useState } from 'react';

const Sidebar = () => {
  // State untuk toggle sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-20'} bg-pink-300 transition-width duration-300 shadow-lg`}>
      <div className="flex items-center justify-center py-4">
        <img src="logo.png" alt="WeCare Logo" className="w-10 h-10" />
        {isOpen && <h1 className="ml-4 text-2xl font-bold text-white">WeCare</h1>}
      </div>
      <ul className="mt-10 space-y-4">
        <li className="flex items-center space-x-4 p-2 hover:bg-pink-400 cursor-pointer">
          <i className="text-white text-2xl fas fa-home"></i>
          {isOpen && <span className="text-white">Home</span>}
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-pink-400 cursor-pointer">
          <i className="text-white text-2xl fas fa-clipboard"></i>
          {isOpen && <span className="text-white">Test</span>}
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-pink-400 cursor-pointer">
          <i className="text-white text-2xl fas fa-users"></i>
          {isOpen && <span className="text-white">Komunitas</span>}
        </li>
      </ul>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? 'Tutup' : 'Buka'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
