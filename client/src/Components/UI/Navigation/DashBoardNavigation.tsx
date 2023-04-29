import * as React from "react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthSliceActions } from "../../../../store/auth";
import { formDataActions } from "../../../../store/forms";
import { FaUserAlt, FaQrcode, FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiFillQuestionCircle,
  AiFillCloseSquare,
} from "react-icons/ai";
import { BiMessage, BiMenuAltLeft, BiLogOutCircle } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";

interface Props {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

function DashBoardNavigation({ expanded, setExpanded }: Props) {
  const { username } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authUsername = sessionStorage.getItem("username");

  const closeNavigation = (evt: FormEvent) => {
    setExpanded((prevState) => !prevState);
  };

  const logoutHandler = (evt: FormEvent) => {
    evt.preventDefault();
    // Clear redux authentication state
    dispatch(AuthSliceActions.setAuthState(null));

    // un-validate redux username and password
    dispatch(formDataActions.setValidUsername(false));
    dispatch(formDataActions.setValidPassword(false));

    // Clear session
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("username");

    setTimeout(() => {
      navigate("/planet-preserve/login");
    }, 2000);
  };

  return (
    <div className="d_nav--wrapper">
      <aside
        id="DashboardMobileNavigation"
        className="dashboard_nav--bg h-screen"
      >
        {/* Dashboard Navigation */}
        <nav className="navigation px-8 py-5">
          {/* User icon and name */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="dashboard-icon--wrapper flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white">
                <FaUserAlt className="dashboard-icon" />
              </div>
              <p className="text-white username ml-3">{username} DashBoard</p>
            </div>

            <div>
              <button
                type="button"
                aria-label="close navigation"
                onClick={closeNavigation}
              >
                {expanded ? (
                  <AiFillCloseSquare className="mobile-closeIcon text-white text-2xl" />
                ) : null}
              </button>
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
              <Link
                to={`/planet-preserve/dashboard/${authUsername}`}
                className="nav-text ml-4"
              >
                Overview
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <FaUserAlt className="nav-icon" />
              <Link
                to="/planet-preserve/contributions"
                className="nav-text ml-4"
              >
                My Contributions
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <IoIosAddCircle className="nav-icon" />
              <Link
                to={`/planet-preserve/${authUsername}/add-contribution`}
                className="nav-text ml-4"
              >
                Add Contribution
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <FaEdit className="nav-icon" />
              <Link
                to="/planet-preserve/contributions"
                className="nav-text ml-4"
              >
                Edit Contribution
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <FaTrashAlt className="nav-icon" />
              <Link
                to="/planet-preserve/contributions"
                className="nav-text ml-4"
              >
                Delete Contribution
              </Link>
            </li>

            <li className="flex items-center mb-4 dashboard-link">
              <BiLogOutCircle className="nav-icon" />
              <button
                className="nav-text ml-4"
                type="button"
                aria-label="logout"
                onClick={logoutHandler}
              >
                Logout
              </button>
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
}

export default DashBoardNavigation;
