import React from "react";
import { authStore } from "../store/authStore";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { Dashboard } from "@mui/icons-material";
import DashBoardLayout from "../components/DashBoardLayout";
function RutasPrivadas() {
  return (
    <>
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
