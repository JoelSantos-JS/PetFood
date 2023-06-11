import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import Header from "../../components/Header/Header";
import "./style.css";
import ProductCard from "../../components/Product/ProductCard";

function PetShop() {
  return (
    <div className="h-100">
      <Header whiteV={false} />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://elements-cover-images-0.imgix.net/0e947e72-2e49-4c64-80f4-29babf42f4a3?auto=compress%2Cformat&fit=max&w=632&s=fce329e5d1a6db19197cafcbff16cfe1"
              alt=""
              className="img-fluid pet-img"
            />
            <b className="mt-2">Petlove</b>
            <div className="petshop-infos d-flex  align-items-center justify-content-between">
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
              <div className="frete row">
                <b>Frete Gratis</b>
              </div>
            </div>
          </div>

          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetShop;
