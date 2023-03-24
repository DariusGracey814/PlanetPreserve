import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaInfoCircle,
  FaQrcode,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { AiOutlineSearch, AiFillQuestionCircle } from "react-icons/ai";
import { BiMessage, BiMenuAltLeft, BiLogOutCircle } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";

const DashBoardNavigation: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="d_nav--wrapper border">
      {/* Mobile Navigation */}
      <button
        className="show_dashboard--nav"
        aria-controls="DashboardMobileNavigation"
        aria-expanded={`${expanded}`}
        aria-label="mobile navigation"
      >
        <BiMenuAltLeft className="mobile-nav" />
      </button>

      <aside
        id="DashboardMobileNavigation"
        className="dashboard_nav--bg h-screen"
      >
        {/* Dashboard Navigation */}
        <nav className="px-8 py-5">
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

          {/* Search Bar */}
          <div>
            <form className="relative search">
              <input
                className="rounded-lg shadow-md"
                type="text"
                placeholder="Quick Find"
              />
              <button className="absolute search-btn" type="submit">
                <AiOutlineSearch className="search_icon" />
              </button>
            </form>
          </div>

          {/* General Navigation Link */}
          <div className="general-text mb-4 ml-1">
            <p className="general text-white">GENERAL</p>
          </div>

          {/* Navigation Links */}
          <ul className="mb-14">
            <li className="flex items-center mb-4 dashboard-link">
              <FaQrcode className="nav-icon" />
              <Link to="/dashboard" className="nav-text ml-4">
                Overview
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <FaUserAlt className="nav-icon" />
              <Link to="/dashboard" className="nav-text ml-4">
                My Contributions
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <IoIosAddCircle className="nav-icon" />
              <Link to="/dashboard" className="nav-text ml-4">
                Add Contribution
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <FaEdit className="nav-icon" />
              <Link to="/dashboard" className="nav-text ml-4">
                Edit Contribution
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <FaTrashAlt className="nav-icon" />
              <Link to="/dashboard" className="nav-text ml-4">
                Delete Contribution
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <BiLogOutCircle className="nav-icon" />
              <Link to="/planet-preserve/login" className="nav-text ml-4">
                Logout
              </Link>
            </li>
          </ul>

          {/* Support Navigation Link */}
          <div className="general-text mb-4 ml-1">
            <p className="general text-white">SUPPORT</p>
          </div>

          {/* Support Navigation */}
          <ul>
            <li className="flex items-center mb-4 dashboard-link">
              <AiFillQuestionCircle className="nav-icon" />
              <Link to="/dashboard" className="nav-text ml-4">
                Help
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <BiMessage className="nav-icon" />
              <Link to="/dashboard" className="nav-text ml-4">
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default DashBoardNavigation;
