import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Rutas from "./routes/Rutas";

import Spinner from "./components/Spinner";
import { authStore } from "./store/authStore";
import { observer } from "mobx-react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div>
        <Rutas />
      </div>
    </QueryClientProvider>
  );
}

export default observer(App);
