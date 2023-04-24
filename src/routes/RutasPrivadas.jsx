import React from "react";
import { authStore } from "../store/authStore";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { observer } from "mobx-react";
function RutasPrivadas() {
  return <>{authStore.logear ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default observer(RutasPrivadas);
