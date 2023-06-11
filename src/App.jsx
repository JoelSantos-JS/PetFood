import { useState } from "react";
import Cadastro from "./pages/Cadastro/Cadastro";
import Checkout from "./pages/Checkout/Checkout";
import PetShop from "./pages/PetShop/PetShop";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />

      {/* <Checkout /> */}
      <Sidebar />
      {/* <PetShop /> */}
    </>
  );
}

export default App;
