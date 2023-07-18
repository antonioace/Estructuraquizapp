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
import useStatusLogin from "../hooks/useStatusLogin";
import { authStore, setCargando } from "../store/authStore";
import Spinner from "../components/Spinner";
import RespuestasForm from "../features/respuestas/pages/RespuestasForm";
import RecuperarClave from "../features/auth/pages/RecuperarClave";

function Rutas() {
  const { verificarToken } = useStatusLogin();
  React.useEffect(() => {
    verificarToken();
  }, []);

  return (
    <>
      {authStore.cargando ? (
        <Spinner />
      ) : (
        <Routes>
          <Route element={<RutasPublicas />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="register" element={<RegistroPage />} />
            <Route path="recuperar-clave" element={<RecuperarClave />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>

          <Route element={<RutasPrivadas />} path={rutasPrivadas.DASHBOARD}>
            <Route path="" element={<Navigate to="crear-cuestionario" />} />
            <Route
              path="crear-cuestionario"
              element={<CrearCuestionarioPage hola={"hola1"} />}
            />
            <Route path="crear-respuesta" element={<RespuestasForm />} />
            <Route
              path="crear-cuestionario1"
              element={<CrearCuestionarioPage hola={"hola2"} />}
            />
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
      )}
    </>
  );
}

export default observer(Rutas);
