import { useState } from "react";
import Cadastro from "./pages/Cadastro/Cadastro";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Cadastro /> */}
      <Checkout />
    </>
  );
}

export default App;
