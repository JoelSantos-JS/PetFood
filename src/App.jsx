import { useState } from "react";
import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cadastro />
    </>
  );
}

export default App;
