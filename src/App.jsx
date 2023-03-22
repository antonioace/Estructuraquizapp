import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CrearCuestionarioPage from "./feature/Cuestionario/pages/CrearCuestionarioPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CrearCuestionarioPage />
    </div>
  );
}

export default App;
