import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Rutas from "./routes/Rutas";
import useStatusLogin from "./hooks/useStatusLogin";
import Spinner from "./components/Spinner";
import { authStore } from "./store/authStore";
import { observer } from "mobx-react";

function App() {
  const { checkStatusLogin } = useStatusLogin();

  React.useEffect(() => {
    checkStatusLogin();
    return () => {
      checkStatusLogin();
    };
  }, []);

  console.log(authStore.cargando, "cargando");
  return <div>{authStore.cargando ? <Spinner /> : <Rutas />}</div>;
}

export default observer(App);
