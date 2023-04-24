import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Rutas from "./routes/Rutas";
import useStatusLogin from "./hooks/useStatusLogin";
import Spinner from "./components/Spinner";

function App() {
  const { checkStatusLogin, cargando } = useStatusLogin();

  React.useEffect(() => {
    console.log("Me ejecutooo")
    checkStatusLogin();
  }, []);

  return (
    <div>
  { 
  cargando ? <Spinner/>: <Rutas />
  }
    </div>
  );
}

export default App;
