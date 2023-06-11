import React from "react";
import "./styles.css";
import Header from "../../components/Header/Header";
import PetShop from "../../components/PetShop";
function Home() {
  return (
    <div className="h-100">
      <Header hideCart />

      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais proximos de Voce (5)</h5>
        </div>
        <ul className="col-12 petshop-list">
          {[1, 2, 3, 4, 5].map((item) => (
            <PetShop key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
