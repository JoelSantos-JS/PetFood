import React, { useEffect } from "react";
import "./styles.css";
import Header from "../../components/Header/Header";
import PetShop from "../../components/PetShop";
import Map from "../../components/Map/Map";
import { requestPetshops } from "../../store/modules/shop/actions";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.shop.petshops);

  useEffect(() => {
    dispatch(requestPetshops());
  }, []);

  return (
    <div className="h-100">
      <Header hideCart />

      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5 className="text-primary h3">Mais proximos de Voce (5)</h5>
        </div>
        <ul className="col-12 petshop-list">
          {pet.map((item) => (
            <PetShop petshop={item} key={item.id} />
          ))}
        </ul>
        <Map petshops={pet} />
      </div>
    </div>
  );
}

export default Home;
