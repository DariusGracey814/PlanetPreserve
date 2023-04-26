import * as React from "react";
import { useState } from "react";
import DashBoardNavigation from "../UI/Navigation/DashBoardNavigation";
const PlanetPreserveMap = React.lazy(() => import("../GoogleMaps/GoogleMap"));
import MobileHeader from "../UI/Navigation/MobileHeader";
import Stats from "../Stats/Stats";

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

  return (
    <section className="dashboard-section grid dashboard_grid w-screen h-screen">
      <div
        className={`mobile-navigation ${
          expanded ? "mobile-navigation--active" : ""
        }`}
      >
        <DashBoardNavigation expanded={expanded} setExpanded={setExpanded} />
      </div>

      {/* Mobile header */}
      <MobileHeader
        expanded={expanded}
        setExpanded={setExpanded}
        hidden={hidden}
        setHidden={setHidden}
      />

      {/* DASHBOARD  */}
      <div className="dashboard-2">
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
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
