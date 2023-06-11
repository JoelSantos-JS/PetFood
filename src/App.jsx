import { useState } from "react";
import Cadastro from "./pages/Cadastro/Cadastro";
import Checkout from "./pages/Checkout/Checkout";
import PetShop from "./pages/PetShop/PetShop";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/petshop/:id" element={<PetShop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
