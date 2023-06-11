import React from "react";
import logo1 from "./../../assets/logo1.png";
import logo from "../../assets/logo-white.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./styles.css";

function Header({ whiteV, hideCart }) {
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div>
      <header className="col-12 text-center mt-3 mb-4">
        <img src={whiteV ? logo : logo1} alt="logo" />
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
