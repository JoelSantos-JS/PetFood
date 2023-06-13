import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import marker from "../../assets/marker.png";
import markerSelect from "../../assets/markerSelectd.png";

function Marker({ petshop }) {
  const { petshopMapSelected } = useSelector((state) => state.shop);
  return (
    <Link to={`/petshop/${petshop.id}`}>
      <img
        src={petshopMapSelected === petshop.id ? markerSelect : marker}
        alt="marker"
        className=""
      />
      <img src={petshop.logo} alt="" className="img-fluid img-marker" />
    </Link>
  );
}

export default Marker;
