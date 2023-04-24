import React from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import CrearCuestionarioPage from "../features/Cuestionario/pages/CrearCuestionarioPage";

import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";
import { observer } from "mobx-react";
import LoginPage from "../features/auth/pages/LoginPage";
import RegistroPage from "../features/auth/pages/RegistroPage";

function Rutas() {
  return (
    <Routes>
      <Route element={<RutasPublicas />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<RegistroPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>

      <Route element={<RutasPrivadas />} path="dashboard">
        <Route path="crear-cuestionario" element={<CrearCuestionarioPage />} />
      </Route>
    </Routes>
  );
}

export default observer(Rutas);
