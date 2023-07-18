import React from "react";

import { estadosAlert } from "../utils/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../config/firebase";
import { mostrarMensaje } from "../store/mensajeStore";
import {
  setLogear,
  setCargando as setCargandoAuth,
  setUsuario,
} from "../store/authStore";
import { logearUsuario } from "../features/auth/services/authServices";
import { useMutation } from "react-query";

function useAuth() {
  const { data, isLoading, isSuccess, mutate } = useMutation(
    "logear",
    logearUsuario,
    {
      onSuccess: (response) => {
        if (response?.data?.access_token) {
          localStorage.setItem("token", response.data.access_token);
          window.location.reload();
        } else {
          mostrarMensaje(estadosAlert.ERROR, "Error al logear usuario");
        }
      },
      onError: (error) => {
        mostrarMensaje(estadosAlert.ERROR, "Error al logear usuario");
      },
    }
  );

  const logear = async (data) => {
    mutate(data);
  };
  return {
    logear,
    cargando: isLoading,
  };
}

export default useAuth;
