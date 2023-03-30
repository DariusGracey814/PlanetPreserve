import React, { FormEvent, MouseEventHandler, useState } from "react";
import DashBoardNavigation from "../UI/Navigation/DashBoardNavigation";
import PlanetPreserveMap from "../HighChart/HighChartMap";
import { AiFillStar, AiFillCloseSquare } from "react-icons/ai";
import { BiMenuAltLeft, BiWorld } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Dashboard: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  // Geolocation of user for google maps api
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    console.log("Api not supported");
  }

  function success(pos: { coords: GeolocationCoordinates; timestamp: number }) {
    const crd = pos.coords;
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  }

  function error(err: { code: number; message: string }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // Navigation toggle
  function toggleNavigation(evt: FormEvent) {
    setExpanded((prevState) => !prevState);
  }

  // Dashboard Toggle
  function toggleStats(evt: FormEvent) {
    setHidden((prevState) => !prevState);
  }

  return (
    <section className="dashboard-section grid dashboard_grid w-screen h-screen">
      <div
        className={`mobile-navigation ${
          expanded ? "mobile-navigation--active" : ""
        } border border-red`}
      >
        <DashBoardNavigation expanded={expanded} setExpanded={setExpanded} />
      </div>

      {/* Mobile Navigation  */}
      <div
        className={`nav-overlay ${expanded ? "nav-overlay--active" : ""}`}
      ></div>

      {/* Mobile Navigation */}
      <div className="mobile-nav--wrapper flex justify-between items-center">
        <button
          className="mobile-nav"
          aria-controls="DashboardMobileNavigation"
          aria-expanded={`${expanded}`}
          aria-label="mobile navigation"
          onClick={toggleNavigation}
        >
          <BiMenuAltLeft className="mobile-nav" />
        </button>

        <div className="contributions-tab mt-2">
          <button
            className="flex items-center justify-center"
            onClick={toggleStats}
          >
            {hidden ? <BsFillArrowLeftSquareFill /> : <AiFillCloseSquare />}{" "}
            &nbsp; {hidden ? "Stats" : "Close"}
          </button>
        </div>
      </div>

      {/* DASHBOARD  */}
      <div>
        {/* Contributions Stats (current eco contributions, world eco contributes, stars 1 = 1 contribution) */}
        <div className="dashboard_container" aria-hidden={hidden}>
          {/* Contribution bucket 1 */}
          {latitude !== 0 && longitude !== 0 ? (
            <PlanetPreserveMap latitude={latitude} longitude={longitude} />
          ) : (
            <div className="flex justify-center items-center w-full h-screen">
              Enable Location to view map
            </div>
          )}

          {/* Contribution bucket 2 */}
          <div
            className={`flex p-3 contribution-stats ${
              !hidden ? "contribution-stats-active" : ""
            }`}
          >
            <div className="contributions flex justify-between w-full">
              {/* All Contributions */}
              <div className="p-3 stat-box shadow-xl">
                <p className="mb-1">Eco Contributions</p>
                <p className="flex items-center">
                  <BiWorld className="stat-icon" />
                  <span className="text-lg">1000</span>
                </p>
              </div>

              {/* Your Contributions */}
              <div className="p-3 stat-box shadow-xl mx-3">
                <p className="mb-1">Your Contributions</p>
                <p className="flex items-center">
                  <FaUserAlt className="stat-icon user-icon" />
                  <span className="text-lg">30</span>
                </p>
              </div>

              {/* Stars */}
              <div className="p-3 stat-box shadow-xl">
                <p className="mb-1">Eco Stars</p>
                <p className="flex items-center">
                  <AiFillStar className="stat-icon" />
                  <span className="text-lg">30</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
