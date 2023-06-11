import React from "react";
import "./styles.css";
import marker from "../../assets/marker.png";
import markerSelect from "../../assets/markerSelectd.png";

function Marker() {
  return (
    <div>
      <img src={markerSelect} alt="marker" className="" />
      <img
        src="https://elements-cover-images-0.imgix.net/0e947e72-2e49-4c64-80f4-29babf42f4a3?auto=compress%2Cformat&fit=max&w=632&s=fce329e5d1a6db19197cafcbff16cfe1"
        alt=""
        className="img-fluid img-marker"
      />
    </div>
  );
}

export default Marker;
