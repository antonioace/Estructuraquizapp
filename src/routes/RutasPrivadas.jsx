import React from "react";
import { authStore } from "../store/authStore";
import { Navigate, Outlet, redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Dashboard } from "@mui/icons-material";
import DashBoardLayout from "../components/DashBoardLayout";
import { sleep } from "../utils/utils";
import { mensajeStore } from "../store/mensajeStore";
import { Alert, Snackbar } from "@mui/material";
function RutasPrivadas() {
  const [cargando, setCargando] = React.useState(true);
  const params = useParams();

  return (
    <>
      <Snackbar
        open={mensajeStore.open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={2000}
      >
        <Alert severity={mensajeStore.estado} sx={{ width: "100%" }}>
          {mensajeStore.mensaje}
        </Alert>
      </Snackbar>
      {authStore.logear ? (
        <DashBoardLayout>
          <Outlet />
        </DashBoardLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default observer(RutasPrivadas);
