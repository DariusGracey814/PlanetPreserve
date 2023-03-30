import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface Props {
  latitude: number;
  longitude: number;
}

function PlanetPreserveMap({ latitude, longitude }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // If map is not loaded return loading state
  if (!isLoaded)
    return <div className="flex justify-center items-center">Loading...</div>;

  return (
    <div className="map_wrapper">
      {/* center be the lat and lng of the user local */}
      <GoogleMap
        zoom={10}
        center={{ lat: +latitude, lng: +longitude }}
        mapContainerClassName="map-container shadow-xl"
        mapTypeId={google.maps.MapTypeId.HYBRID}
      >
        <Marker position={{ lat: +latitude, lng: +longitude }} />
      </GoogleMap>
    </div>
  );
}

export default PlanetPreserveMap;
