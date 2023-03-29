import React, { useState } from "react";
import DashBoardNavigation from "../UI/Navigation/DashBoardNavigation";
import PlanetPreserveMap from "../HighChart/HighChartMap";
import { AiFillStar } from "react-icons/ai";
import { BiMenuAltLeft, BiWorld } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

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
    console.log(pos);
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    setLatitude(crd.latitude);
    console.log(`Longitude: ${crd.longitude}`);
    setLongitude(crd.longitude);
  }

  function error(err: { code: number; message: string }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  return (
    <section className="grid dashboard_grid w-screen h-screen">
      <div className="mobile-navigation border border-red">
        <DashBoardNavigation />
      </div>

      {/* Mobile Navigation */}
      <button
        className="mobile-nav"
        aria-controls="DashboardMobileNavigation"
        aria-expanded={`${expanded}`}
        aria-label="mobile navigation"
      >
        <BiMenuAltLeft className="mobile-nav" />
      </button>

      {/* DASHBOARD  */}
      <div className="border border-red-600">
        {/* Contributions Stats (current eco contributions, world eco contributes, stars 1 = 1 contribution) */}
        <div className="dashboard_container">
          <h1 className="stat-h1 text-center">Dashboard Overview</h1>
          {/* Contribution bucket 1 */}
          {latitude !== 0 && longitude !== 0 ? (
            <PlanetPreserveMap latitude={latitude} longitude={longitude} />
          ) : (
            <div className="flex justify-center items-center w-full h-screen">
              Enable Location to view map
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
// grid grid-3-cols
