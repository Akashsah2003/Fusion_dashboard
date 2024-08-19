import React from "react";

const Dashboard = () => {
    return (
        <div className="flex-1 flex overflow-hidden">
        {/* Left side (grid) */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-3 gap-4 h-1/2">
            {/* Work Experience */}
            <div className="col-span-3 bg-gray-200 p-4 rounded-lg ">
              <h2 className="font-bold mb-2 text-center">Work Experience</h2>
              {/* <div className="bg-white h-40 w-full rounded-lg flex items-end p-4">
                <div className="w-1 h-32 bg-black"></div>
                <div className="flex-grow h-1 bg-black self-end ml-1"></div>
              </div> */}
              <ul>
                <li>Software Engineer at XYZ Company</li>
                <li>Software Engineer at XYZ Company</li>
              </ul>
            </div>

            {/* My Skills */}
            <div className="col-span-2 row-span-2 bg-gray-200 p-4 rounded-lg">
              <h2 className="font-bold text-center">My Skills</h2>
            </div>

            {/* Achievements */}
            <div className="bg-gray-200 p-4 rounded-lg">
              <h2 className="font-bold mb-2 text-center">Achievements</h2>
              <p className="text-center">NO Activity</p>
            </div>

            {/* Educational courses */}
            <div className="bg-gray-200 p-4 rounded-lg">
              <h2 className="font-bold mb-2 text-center">Educational courses</h2>
              <p>BitByte</p>
            </div>
          </div>
        </div>
    </div>
    )
};
export default Dashboard;