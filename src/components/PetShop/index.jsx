import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import {
  setMapCenter,
  setShopMapSelect,
} from "../../store/modules/shop/actions";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

function PetShop({ petshop }) {
  const dispatch = useDispatch();
  const { petshopMapSelected } = useSelector((state) => state.shop);
  const setSelectPetShop = () => {
    // setar a petshop selecionada
    // setar o centro do mapa
    dispatch(setShopMapSelect(petshop.id));
    dispatch(setMapCenter(petshop.location));
  };

  return (
    <li
      className={`petshop d-inline-block ${
        petshopMapSelected === petshop.id && "active"
      }`}
      onClick={() => setSelectPetShop()}
    >
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
