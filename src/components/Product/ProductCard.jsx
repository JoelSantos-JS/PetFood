import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./styles.css";

function ProductCard() {
  return (
    <div className="product-card col-3">
      <img
        src="https://tfcxr7.vtexassets.com/arquivos/ids/155921-1200-auto?v=637693135455030000&width=1200&height=auto&aspect=true"
        alt=""
        className="img-fluid align-center"
      />

      <button className=" adc ">+</button>

      <div className="product-card-info d-flex align-items-center  justify-content-between">
        <h6 className="d-flex  ">
          <AiOutlineStar size={18} />
          <p>4,3</p>
        </h6>
        <h6>
          {" "}
          <label className="badge-card ">R$ 99,99</label>
        </h6>
      </div>

      <small>
        <b>Lorem ipsum dolor sit.</b>
      </small>
    </div>
  );
}

export default ProductCard;
