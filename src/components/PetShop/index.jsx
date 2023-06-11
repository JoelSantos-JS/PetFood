import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import "./styles.css";

function PetShop() {
  return (
    <li className="petshop d-inline-block ">
      <div className="d-inline-block">
        <img
          src="https://elements-cover-images-0.imgix.net/0e947e72-2e49-4c64-80f4-29babf42f4a3?auto=compress%2Cformat&fit=max&w=632&s=fce329e5d1a6db19197cafcbff16cfe1"
          alt=""
          className="img-fluid"
        />
      </div>

      <div className="d-inline-block">
        <b className="mt-2 title">Petlove</b>
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
