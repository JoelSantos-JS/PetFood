import React from "react";
import "./styles.css";
import marker from "../../assets/marker.png";
import markerSelect from "../../assets/markerSelectd.png";

function Marker({ petshop }) {
  return (
    <div>
      <img src={marker} alt="marker" className="" />
      <img src={petshop.logo} alt="" className="img-fluid img-marker" />
    </div>
  );
}

export default Marker;
