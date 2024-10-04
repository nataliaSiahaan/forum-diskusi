import React, { useState } from 'react';
import Forum from './components/Forum';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mengelola sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Fungsi untuk toggle sidebar
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`mx-32 my-8 ${isSidebarOpen ? 'shifted' : ''}`}>
        <Banner />
      </div>

      <div className="mx-32 my-8 p-2">
        <Forum />
      </div>
    </>
  );
}

export default App;
