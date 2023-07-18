import React from "react";
import { authStore } from "../store/authStore";
import { Navigate, Outlet, redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Dashboard } from "@mui/icons-material";
import DashBoardLayout from "../components/DashBoardLayout";
import { sleep } from "../utils/utils";
function RutasPrivadas() {
  const [cargando, setCargando] = React.useState(true);
  const params = useParams();

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
