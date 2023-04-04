import * as React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

interface Props {
  hidden: boolean;
}

function Stats({ hidden }: Props) {
  return (
    <div
      className={`flex p-3 contribution-stats ${
        !hidden ? "contribution-stats-active" : ""
      }`}
    >
      <div className="contributions flex justify-between w-full">
        {/* All Contributions */}
        <div className="p-4 stat-box shadow-xl">
          <p className="mb-1">Eco Contributions</p>
          <p className="flex items-center">
            <BiWorld className="stat-icon" />
            <span className="text-lg">1000</span>
          </p>
        </div>

        {/* Your Contributions */}
        <div className="p-4 stat-box shadow-xl mx-3">
          <p className="mb-1">Your Contributions</p>
          <p className="flex items-center">
            <FaUserAlt className="stat-icon user-icon" />
            <span className="text-lg">30</span>
          </p>
        </div>

        {/* Stars */}
        <div className="p-4 stat-box shadow-xl">
          <p className="mb-1">Eco Stars</p>
          <p className="flex items-center">
            <AiFillStar className="stat-icon" />
            <span className="text-lg">30</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
