import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaInfoCircle,
  FaQrcode,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { AiOutlineSearch, AiFillQuestionCircle } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";

const DashBoardNavigation: React.FC = () => {
  return (
    <aside className="dashboard_nav--bg">
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
              className="rounded-lg"
              type="text"
              placeholder="Quick Find"
            />
            <button className="absolute search-btn" type="submit">
              <AiOutlineSearch className="search_icon" />
            </button>
          </form>
        </div>

        {/* General Navigation Link */}
        <div className="general-text mb-4">
          <p className="general text-white">GENERAL</p>
        </div>

        {/* Navigation Links */}
        <ul className="mb-14">
          <li className="flex items-center mb-4">
            <FaQrcode className="nav-icon" />
            <Link to="/dashboard" className="nav-text ml-4">
              Overview
            </Link>
          </li>

          <li className="flex items-center mb-4">
            <FaUserAlt className="nav-icon" />
            <Link to="/dashboard" className="nav-text ml-4">
              My Posts
            </Link>
          </li>

          <li className="flex items-center mb-4">
            <IoIosAddCircle className="nav-icon" />
            <Link to="/dashboard" className="nav-text ml-4">
              Add Posts
            </Link>
          </li>

          <li className="flex items-center mb-4">
            <FaEdit className="nav-icon" />
            <Link to="/dashboard" className="nav-text ml-4">
              Edit Post
            </Link>
          </li>

          <li className="flex items-center mb-4">
            <FaTrashAlt className="nav-icon" />
            <Link to="/dashboard" className="nav-text ml-4">
              Delete Post
            </Link>
          </li>
        </ul>

        {/* Support Navigation Link */}
        <div className="general-text mb-4">
          <p className="general text-white">SUPPORT</p>
        </div>

        {/* Support Navigation */}
        <ul>
          <li className="flex items-center mb-4">
            <AiFillQuestionCircle className="nav-icon" />
            <Link to="/dashboard" className="nav-text ml-4">
              Help
            </Link>
          </li>

          <li className="flex items-center mb-4">
            <BiMessage className="nav-icon" />
            <Link to="/dashboard" className="nav-text ml-4">
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashBoardNavigation;
