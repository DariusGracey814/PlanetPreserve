import React from "react";
import DashBoardNavigation from "../UI/Navigation/DashBoardNavigation";
import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <section className="grid dashboard_grid w-screen h-screen">
      <DashBoardNavigation />

      {/* DASHBOARD  */}
      <div className="px-5 py-4 border">
        {/* Contributions Stats (current eco contributions, world eco contributes, stars 1 = 1 contribution) */}
        <div className="dashboard_container flex justify-between border">
          <h1 className="stat-h1">Overview</h1>
          {/* Contribution bucket 1 */}
          <div className="stat_wrapper grid grid-3-cols">
            {/* #1 */}
            <div className="stats-bg rounded-lg p-3 shadow-md">
              <h2 className="stat-h2 flex items-center">
                <span>
                  <FaUserAlt className="stat-icon--user" />
                </span>
                Your Eco Contributions
              </h2>
              <p className="stat-counter">{21}</p>
            </div>
            {/* #2 */}
            <div className="stats-bg rounded-xl p-3 shadow-md">
              <h2 className="stat-h2 flex items-center">
                <BiWorld className="stat-icon" /> USA Eco Contributions
              </h2>
              <p className="stat-counter">{1000}</p>
            </div>
            {/* #3 */}
            <div className="stats-bg rounded-lg p-3 shadow-md">
              <h2 className="stat-h2 flex items-center justify-center">
                <span className="flex star_icon--wrapper">
                  <AiFillStar className="star-icon text-center" />
                  <AiFillStar className="star-icon text-center" />
                  <AiFillStar className="star-icon text-center" />
                </span>
                Your Eco Stars
              </h2>
              <p className="stat-counter">{21}</p>
            </div>
          </div>
        </div>
        Dashboard
      </div>
    </section>
  );
};

export default Dashboard;
// grid grid-3-cols
