import React from "react";
import { setCargando as setCargandoAuth, setLogear, setUsuario } from "../../../store/authStore";
import { mostrarMensaje } from "../../../store/mensajeStore";
import { estadosAlert } from "../../../utils/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../../../config/firebase";

function useAuth() {
  const [cargando , setCargando] = React.useState(false);


  const logear = async (data) => {
    const { email, clave } = data;
    setCargando(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        clave
      );
      setUsuario(userCredential.user);
      console.log("USer credential", userCredential.user);
      localStorage.setItem("token", userCredential.user.accessToken);

      setLogear(true);
    } catch (error) {
      mostrarMensaje(estadosAlert.ERROR, "Error al logear usuario");
      console.error("Error al logear usuario:", error);
    } finally {
      setCargando(false);
    }
  };
  return {
    logear,
    cargando,
  };
}

export default (useAuth);
