import React from "react";
import { authStore, setUsuario } from "../store/authStore";
import { obtenerUsuarioLogeado } from "../features/auth/services/authServices";
import { useQuery } from "react-query";

function useUser() {
  const { data, isSuccess, isError, isFetching, isLoading } = useQuery(
    "usuario",
    obtenerUsuarioLogeado
  );

  return {
    cargando: isLoading,
    usuario: isSuccess ? data.data : {},
  };
}

export default useUser;
