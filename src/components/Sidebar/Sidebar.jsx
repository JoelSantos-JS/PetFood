import { useEffect, useState } from "react";

import "./styles.css";

import { Dock } from "react-dock";
import Product from "../Product/Product";

function Sidebar() {
  const [opened, setOpene] = useState(false);

  useEffect(() => {
    window.addEventListener("openCart", () => {
      setOpene(true);
    });
  }, []);

  return (
    <Dock
      position="right"
      isVisible={opened}
      onVisibleChange={(v) => setOpene(v)}
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola (5)</h5>

        <div className="row products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="row footer">
          <div className="col-12 d-flex justify-content-between">
            <b className="d-inline-block">Total</b>
            <h5>R$ 90,00</h5>
          </div>
          <button className="btn btn-primary btn-block mb-2 rounded">
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
}

export default Sidebar;
