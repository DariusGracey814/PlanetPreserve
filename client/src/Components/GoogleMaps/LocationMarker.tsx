import * as React from "react";
import { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

function LocationMarker({ contribution, date }) {
  const [mapMarker, setMapMarker] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onLoad = (mapMarker: any) => {
    setMapMarker(mapMarker);
  };

  return (
    <Marker
      position={{ lat: contribution.latitude, lng: contribution.longitude }}
      onLoad={(evt) => onLoad(evt)}
      onClick={onToggleOpen}
    >
      {isOpen && (
        <InfoWindow
          anchor={mapMarker}
          position={{
            lat: contribution.latitude,
            lng: contribution.longitude,
          }}
        >
          <div className="info-window">
            <h3>{contribution.type}</h3>
            <p>{contribution.description}</p>
            <p className="info-date">{date}</p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}

export default LocationMarker;
