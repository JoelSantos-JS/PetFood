import React from "react";
import logo1 from "./../../assets/logo1.png";
import logo from "../../assets/logo-white.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./styles.css";
import { Link } from "react-router-dom";

function Header({ whiteV, hideCart }) {
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div>
      <header className="col-12 text-center mt-3 mb-4">
        <Link to="/">
          <img src={whiteV ? logo : logo1} alt="logo" />
        </Link>
      </header>
      {!hideCart && (
        <button
          className="btn btn-secondary cart-button"
          onClick={() => openDrawer()}
        >
          <span className="">
            <AiOutlineShoppingCart size={18} />
          </span>{" "}
          2 Items
        </button>
      )}
    </div>
  );
}

export default Header;
