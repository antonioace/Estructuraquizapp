import React from "react";
import { Navigate, Outlet, Route, Routes, redirect } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegistroPage from "../features/auth/pages/RegistroPage";
import { authStore } from "../store/authStore";
import { observer } from "mobx-react";

function RutasPublicas() {
  return <>{!authStore.logear ? <Outlet /> : <Navigate to="dashboard" />}</>;
}

export default observer(RutasPublicas);
