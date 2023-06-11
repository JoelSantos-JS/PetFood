import React from "react";
import logo1 from "./../../assets/logo1.png";
import logo from "../../assets/logo-white.png";

function Header({ whiteV = true }) {
  return (
    <div className="col-12 text-center mt-3 mb-4">
      <img src={whiteV ? logo : logo1} alt="logo" />
    </div>
  );
}

export default Header;
