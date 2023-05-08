import React from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import CrearCuestionarioPage from "../features/Cuestionario/pages/CrearCuestionarioPage";

import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";
import { observer } from "mobx-react";
import LoginPage from "../features/auth/pages/LoginPage";
import RegistroPage from "../features/auth/pages/RegistroPage";
import InformacionUsuarioPage from "../features/usuario/pages/InformacionUsuarioPage";
import { rutasPrivadas } from "../utils/constantes";
import ListaCuestionarioPage from "../features/Cuestionario/pages/ListaCuestionarioPage";
import EstadisticasPage from "../features/estadisticas/pages/EstadisticasPage";

function Rutas() {
  return (
    <Routes>
      <Route element={<RutasPublicas />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<RegistroPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>

      <Route element={<RutasPrivadas />} path={rutasPrivadas.DASHBOARD}>
        <Route path="" element={<Navigate to="crear-cuestionario" />} />
        <Route path="crear-cuestionario" element={<CrearCuestionarioPage />} />
        <Route
          path="listar-cuestionarios"
          element={<ListaCuestionarioPage />}
        />
        <Route
          path="informacion-usuario"
          element={<InformacionUsuarioPage />}
        />
        <Route path="estadisticas" element={<EstadisticasPage />} />
      </Route>
    </Routes>
  );
}

export default observer(Rutas);
