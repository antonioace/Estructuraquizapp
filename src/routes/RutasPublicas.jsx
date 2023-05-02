import React from "react";
import { Navigate, Outlet, Route, Routes, redirect } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegistroPage from "../features/auth/pages/RegistroPage";
import { authStore } from "../store/authStore";
import { observer } from "mobx-react";
import { Alert, Snackbar } from "@mui/material";
import { mensajeStore } from "../store/mensajeStore";

function RutasPublicas() {
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
      {!authStore.logear ? <Outlet /> : <Navigate to="dashboard" />}
    </>
  );
}

export default observer(RutasPublicas);
