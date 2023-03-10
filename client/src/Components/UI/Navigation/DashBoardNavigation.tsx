import React from "react";
import { FaUserAlt, FaInfoCircle } from "react-icons/fa";

const DashBoardNavigation: React.FC = () => {
  return (
    <aside className="border4 border-red-600 dashboard_nav--bg">
      {/* Dashboard Navigation */}
      <nav className="px-6 py-5">
        {/* User icon and name */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white">
              <FaUserAlt className="dashboard-icon" />
            </div>
            <p className="text-white username ml-3">Darius Gracey</p>
          </div>
          <div>
            <FaInfoCircle className="text-white text-1xl" />
          </div>
        </div>

        {/* Navigation Links */}
        <li></li>
      </nav>
    </aside>
  );
};

export default DashBoardNavigation;
