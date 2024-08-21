import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Announcements from './components/Announcements';
import fusionImage from './assets/fusion.png';
import { FaBuilding, FaUtensils, FaUniversity, FaMoneyBill, FaExclamationCircle, FaHeartbeat } from 'react-icons/fa';
import { BsGrid, BsFileText } from 'react-icons/bs';
import { VscFileSubmodule } from "react-icons/vsc";

function App() {

  return (
    <>
      <div className='flex flex-row h-screen' style={{ fontFamily: '"DroidArabicKufi", "Inter", "Roboto", "Helvetica", "Arial", sans-serif' }}>
        <Sidebar className='h-screen fixed' width='16.66%' backgroundColor='#E5E5E5'>
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

        <div className='flex flex-col h-screen w-5/6'>
          <Navbar />
          <div className='flex flex-row w-full h-[calc(100%-64px)]'>
            <div className='flex w-3/4 overflow-y-scroll'>
              {/* Main Pages Here */}
              <Dashboard />
          </div>
          <div className="flex flex-col w-1/4 h-full justify-between">
                        <Profile />
                        <Announcements />
                    </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
