import * as React from "react";
import { useState, useEffect } from "react";
import LocationMarker from "./LocationMarker";
import { useDispatch } from "react-redux";
import { GoogleMap, LoadScript, MarkerClusterer } from "@react-google-maps/api";
import { getAllContributions } from "../../../api/getContributions";
import { AppDispatch } from "../../../store/store";

function PlanetPreserveMap({ latitude, longitude }) {
  const [contributions, setContributions] = useState([]);

  const dispatch = useDispatch<AppDispatch>();

  const containerStyle = {
    width: "100%",
    height: "82vh",
  };

  // User location
  interface Center {
    lat: number;
    lng: number;
  }

  const center: Center = {
    lat: latitude,
    lng: longitude,
  };

  useEffect(() => {
    dispatch(getAllContributions())
      .then((res) => {
        if (res.payload) {
          setContributions(res.payload);
        }
      })
      .catch((error) => {
        return error == Error ? error?.message : null;
      });
  }, []);

  // // If map is not loaded return loading state
  // if (!isLoaded)
  //   return <div className="flex justify-center items-center">Loading...</div>;

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={{ padding: "0.7em", borderRadius: "10px" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={(map) => {
            map.setMapTypeId("hybrid");
          }}
        >
          {contributions?.map((contribution, index) => {
            const formattedDate = new Date(contribution.timestamp)
              .toISOString()
              .split("T")[0];
            return (
              <LocationMarker
                key={index}
                contribution={contribution}
                date={formattedDate}
              />
            );
          })}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default PlanetPreserveMap;
