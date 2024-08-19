import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Announcements from './components/Announcements';
import fusionImage from './assets/fusion.png';

function App() {

  return (
    <>
    <div className='flex flex-row h-screen' style={{ fontFamily: '"DroidArabicKufi", "Inter", "Roboto", "Helvetica", "Arial", sans-serif' }}>

      <Sidebar className='h-screen fixed' width='16.66%'>
        <div className='flex flex-col items-center justify-around h-80 w-full font-bold text-3xl'>
          <img className='w-[80%] rounded-[60%]' src={fusionImage} alt="" />
          Fusion
        </div>
        <Menu>
          <SubMenu label="Dashboard">
            <MenuItem> Profile </MenuItem>
            <MenuItem> Skills Technologies </MenuItem>
            <MenuItem> Educational Courses </MenuItem>
            <MenuItem> Work Experience </MenuItem>
            <MenuItem> Achievements </MenuItem>
          </SubMenu>
          <SubMenu label="Academics">
            <MenuItem> Current Semester </MenuItem>
            <MenuItem> Registration </MenuItem>
            <MenuItem> Miscellaneous </MenuItem>
          </SubMenu>
          <SubMenu label="Programme And Curriculum">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Mess Management">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Visitor's Hostel">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Healthcare Center">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Scholarship Portal">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Complaint System">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Placement Cell">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Department Portal">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Gymkhana">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Hostel Management">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
          <SubMenu label="Other Academic Procedure">
            <MenuItem> SubModule 1 </MenuItem>
            <MenuItem> SubModule 2 </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <div className='flex flex-col h-screen w-5/6'>
        <Navbar />
        <div className='flex flex-row w-full h-[calc(100%-64px)]'>
          <div className='flex w-3/4 overflow-y-scroll'>
          {/* Main Pages Here */}
              <Dashboard />
          </div>
          <div className='flex flex-col w-1/4 bg-slate-400 h-full justify-around items-center'>
            {/* Profile section right side bar here */}
            <Profile />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
