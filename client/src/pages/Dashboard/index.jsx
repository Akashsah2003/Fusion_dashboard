import React from 'react';

function MiddleSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 md:p-8 space-y-8" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      
      {/* Work Experience Section */}
      <div 
        className="bg-[#d9d9d9] rounded-lg p-4 text-center shadow-md mt-40 w-[88%]"  // Keeping the original width and margin from the top
        style={{ marginTop: '10vh' }}  // Additional margin to maintain original spacing
      >
        <div className="bg-white text-black font-semibold px-6 py-2 inline-block rounded-t-lg">
          Work Experience
        </div>
        <div className="overflow-y-auto mt-3 max-h-48 md:max-h-64 lg:max-h-80">
          <table className="min-w-full bg-white rounded-lg text-sm leading-tight">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-1 px-2 md:px-3 border-b">Organization Name</th>
                <th className="py-1 px-2 md:px-3 border-b">Title</th>
                <th className="py-1 px-2 md:px-3 border-b">Status</th>
                <th className="py-1 px-2 md:px-3 border-b">Start Date</th>
                <th className="py-1 px-2 md:px-3 border-b">End Date</th>
                <th className="py-1 px-2 md:px-3 border-b">Location</th>
                <th className="py-1 px-2 md:px-3 border-b">Description</th>
                <th className="py-1 px-2 md:px-3 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1 px-2 md:px-3 border-b">ABC Corp</td>
                <td className="py-1 px-2 md:px-3 border-b">Software Engineer</td>
                <td className="py-1 px-2 md:px-3 border-b">ONGOING</td>
                <td className="py-1 px-2 md:px-3 border-b">Jan. 8, 2023</td>
                <td className="py-1 px-2 md:px-3 border-b">-</td>
                <td className="py-1 px-2 md:px-3 border-b">New York, NY</td>
                <td className="py-1 px-2 md:px-3 border-b">Developed web applications using React and Node.js.</td>
                <td className="py-1 px-2 md:px-3 border-b text-center"><button className="text-red-500">✖</button></td>
              </tr>
              <tr>
                <td className="py-1 px-2 md:px-3 border-b">XYZ Ltd.</td>
                <td className="py-1 px-2 md:px-3 border-b">Frontend Developer</td>
                <td className="py-1 px-2 md:px-3 border-b">COMPLETED</td>
                <td className="py-1 px-2 md:px-3 border-b">Feb. 1, 2022</td>
                <td className="py-1 px-2 md:px-3 border-b">Dec. 31, 2022</td>
                <td className="py-1 px-2 md:px-3 border-b">San Francisco, CA</td>
                <td className="py-1 px-2 md:px-3 border-b">Designed and implemented responsive UI components.</td>
                <td className="py-1 px-2 md:px-3 border-b text-center"><button className="text-red-500">✖</button></td>
              </tr>
              <tr>
                <td className="py-1 px-2 md:px-3 border-b">Tech Solutions</td>
                <td className="py-1 px-2 md:px-3 border-b">Intern</td>
                <td className="py-1 px-2 md:px-3 border-b">COMPLETED</td>
                <td className="py-1 px-2 md:px-3 border-b">Jun. 15, 2021</td>
                <td className="py-1 px-2 md:px-3 border-b">Aug. 15, 2021</td>
                <td className="py-1 px-2 md:px-3 border-b">Remote</td>
                <td className="py-1 px-2 md:px-3 border-b">Assisted in developing backend APIs using Node.js.</td>
                <td className="py-1 px-2 md:px-3 border-b text-center"><button className="text-red-500">✖</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Skill & Technologies and Achievements Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="bg-[#d9d9d9] rounded-lg p-4 md:p-6 text-center shadow-md">
          <div className="bg-white text-black font-semibold px-6 py-2 inline-block rounded-t-lg">
            Skill & Technologies
          </div>
          <p className="text-middle mt-4">
            DSA<br />
            Full Stack Web Developer
          </p>
        </div>

        <div className="bg-[#d9d9d9] rounded-lg p-4 md:p-6 text-center shadow-md">
          <div className="bg-white text-black font-semibold px-6 py-2 inline-block rounded-t-lg">
            Achievements
          </div>
          <p className="text-middle mt-4">
            GSoC'24 @fossology |<br />
            SIH'23 Finalist | Specialist on Codeforces
          </p>
        </div>
      </div>

      {/* Educational Courses Section */}
      <div className="bg-[#d9d9d9] rounded-lg p-4 md:p-5 text-center shadow-md w-full max-w-3xl">
        <div className="bg-white text-black font-semibold px-6 py-2 inline-block rounded-t-lg">
          Educational Courses
        </div>
        <div className="overflow-y-auto max-h-48 md:max-h-64 lg:max-h-80">
          <table className="min-w-full bg-white rounded-lg mt-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Institute Name</th>
                <th className="py-2 px-4 border-b">Degree</th>
                <th className="py-2 px-4 border-b">Stream</th>
                <th className="py-2 px-4 border-b">Start Date</th>
                <th className="py-2 px-4 border-b">End Date</th>
                <th className="py-2 px-4 border-b">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">mqd</td>
                <td className="py-2 px-4 border-b">knqd</td>
                <td className="py-2 px-4 border-b">kdmql</td>
                <td className="py-2 px-4 border-b">Jan. 8, 2024</td>
                <td className="py-2 px-4 border-b">July 8, 2024</td>
                <td className="py-2 px-4 border-b">dwk</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">knsd</td>
                <td className="py-2 px-4 border-b">jn</td>
                <td className="py-2 px-4 border-b">ksm</td>
                <td className="py-2 px-4 border-b">Aug. 2, 2024</td>
                <td className="py-2 px-4 border-b">Aug. 9, 2024</td>
                <td className="py-2 px-4 border-b">snk</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">nn</td>
                <td className="py-2 px-4 border-b">mk</td>
                <td className="py-2 px-4 border-b">lmsl</td>
                <td className="py-2 px-4 border-b">Jan. 8, 2024</td>
                <td className="py-2 px-4 border-b">Aug. 9, 2024</td>
                <td className="py-2 px-4 border-b">sk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
