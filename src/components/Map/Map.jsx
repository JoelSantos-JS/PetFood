import React from "react";
import GoogleMapReact from "google-map-react";
import GoogleMap from "google-map-react";
import "./styles.css";
import Marker from "../marker";

function Map() {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA-BHViiuOtOLS3tYJbJD8xugArIOld6p4" }}
        center={{
          lat: -13.851,
          lng: -40.0812,
        }}
        defaultZoom={12}
      >
        <Marker lat={-13.851} lng={-40.0812} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
