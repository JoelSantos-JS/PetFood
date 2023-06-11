import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "./styles.css";

function Product() {
  return (
    <div className="col-12 product-list">
      <div className="row">
        <div className="col-3">
          <img
            src="https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/l/a/large_f2612a6c-21ca-4256-a0e4-0f78a9b0c652_1k.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label htmlFor="" className="badge">
              {" "}
              R$ 30,00
            </label>
          </h6>
          <small>
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">
            <AiOutlineMinusCircle size={28} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
