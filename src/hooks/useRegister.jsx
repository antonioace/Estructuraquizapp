import React from "react";
import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { collection, doc, setDoc } from "firebase/firestore";
import useAuth from "./useAuth";
import { FirebaseDB } from "../config/firebase";
import { estadosAlert } from "../utils/types";
import { setCargando } from "../store/authStore";
import { mostrarMensaje } from "../store/mensajeStore";
import { registrarUsuario } from "../features/auth/services/authServices";

function useRegister() {
  const [cargandoRegistro, setCargandoRegistro] = React.useState(false);
  const { logear } = useAuth();
  const methods = useForm();
  const registrar = async (data) => {
    /*     setCargando(true); */
    setCargandoRegistro(true);
    const { nombre, apellido, celular, email, clave } = data;

    try {
      const res = await registrarUsuario(data);

      setCargandoRegistro(false);
      mostrarMensaje(
        estadosAlert.SUCCESS,
        "Usuario registrado correctamente",
        1000
      );
      methods.reset({});
    } catch (error) {
      //  muestrame un snackbar error de material ui

      mostrarMensaje(estadosAlert.ERROR, "Error al registrar usuario", 1000);

      setCargandoRegistro(false);
    } finally {
      setCargando(false);
    }
  };

  return {
    cargandoRegistro,
    registrar,
    methods,
  };
}

export default useRegister;
