import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import "./styles.css";

function PetShop({ petshop }) {
  return (
    <li className="petshop d-inline-block ">
      <div className="d-inline-block">
        <img src={petshop.logo} alt="" className="img-fluid" />
      </div>

      <div className="d-inline-block">
        <b className="mt-2 title">{petshop.name}</b>
        <div className="infos">
          <span className="mdi "></span>
          <text>
            <AiOutlineStar size={15} />
            <b>2,8</b>
          </text>
          <span className="mdi"></span>
          <RiMoneyDollarBoxLine />
          <text>$$$</text>
          <span className="mdi"></span>
          <BiCurrentLocation size={15} />
          <text>2km</text>
        </div>

        <b className="frete">Frete Gratis</b>
      </div>
    </li>
  );
}

export default PetShop;
