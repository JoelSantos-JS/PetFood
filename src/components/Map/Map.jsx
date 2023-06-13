import React from "react";
import GoogleMapReact from "google-map-react";
import GoogleMap from "google-map-react";
import "./styles.css";
import Marker from "../marker";
import data from "./../../data";
import { useSelector } from "react-redux";

function Map({ petshops }) {
  const { mapCenter } = useSelector((state) => state.shop);
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA-BHViiuOtOLS3tYJbJD8xugArIOld6p4" }}
        center={mapCenter}
        defaultZoom={12}
      >
        {petshops.map((p) => (
          <Marker
            petshop={p}
            key={p.location.id}
            lat={p.location.lat}
            lng={p.location.len}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
