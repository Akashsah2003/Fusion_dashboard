import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Announcements from './components/Announcements';
import { FaBuilding, FaUtensils, FaUniversity, FaMoneyBill, FaExclamationCircle, FaHeartbeat } from 'react-icons/fa';
import { BsGrid, BsFileText } from 'react-icons/bs';
import { VscFileSubmodule } from 'react-icons/vsc';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 1024) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [windowWidth]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='flex flex-row h-screen' style={{ fontFamily: '"DroidArabicKufi", "Inter", "Roboto", "Helvetica", "Arial", sans-serif' }}>
        {isSidebarOpen && (
          <Sidebar className='h-screen fixed' width='16.66%' backgroundColor='#D9D9D9'>
            <div className='flex flex-col items-center justify-center h-80 w-full'>
              <div className='h-[80px] w-[80px] bg-black rounded-full text-white flex items-center justify-center text-4xl'>F</div>
              <div className='mt-5 text-2xl font-bold'>Fusion</div>
              <div className='flex space-x-2 mt-4'>
                <div className='h-4 w-4 bg-black rounded-full'></div>
                <div className='h-4 w-4 bg-black rounded-full'></div>
                <div className='h-4 w-4 bg-black rounded-full'></div>
              </div>
            </div>
            <Menu>
              <MenuItem icon={<BsGrid />} className="text-black"> Dashboard </MenuItem>
              <SubMenu label="Modules" icon={<VscFileSubmodule />} className="text-black">
                <MenuItem icon={<FaBuilding />}> Hostal </MenuItem>
                <MenuItem icon={<FaUtensils />}> Mess </MenuItem>
                <MenuItem icon={<FaUniversity />}> Department </MenuItem>
                <MenuItem icon={<FaMoneyBill />}> Scholarship </MenuItem>
                <MenuItem icon={<FaExclamationCircle />}> Complains </MenuItem>
                <MenuItem icon={<FaHeartbeat />}> Healthcare </MenuItem>
              </SubMenu>
              <MenuItem icon={<BsFileText />} className="text-black"> Other </MenuItem>
            </Menu>
          </Sidebar>
        )}

        <div className={`flex flex-col h-screen ${isSidebarOpen ? 'w-5/6 ml-auto' : 'w-full'}`}>
          <Navbar onSidebarToggle={toggleSidebar} />
          <div className='flex flex-row w-full h-[calc(100%-64px)]'>
            <div className='flex w-3/4 overflow-y-scroll'>
              <Dashboard />
            </div>
            <div className="flex flex-col w-1/4 h-full justify-between">
              <Profile />
              <Announcements />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .ml-auto {
            margin-left: 0 !important;
          }
          .w-5/6 {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}

export default App; 