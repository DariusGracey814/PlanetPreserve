import React from "react";
import { FaUserAlt, FaInfoCircle } from "react-icons/fa";

const DashBoardNavigation: React.FC = () => {
  return (
    <aside className="border4 border-red-600 dashboard_nav--bg">
      {/* Dashboard Navigation */}
      <nav>
        {/* User icon and name */}
        <div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-md bg-white">
            <FaUserAlt className="dashboard-icon" />
          </div>
          <p className="text-white">Darius Gracey</p>
          <div>
            <FaInfoCircle className="text-white text-1xl" />
          </div>
        </div>
        <li></li>
      </nav>
    </aside>
  );
};

export default DashBoardNavigation;
