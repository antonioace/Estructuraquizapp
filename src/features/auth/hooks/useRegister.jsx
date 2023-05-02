import React from "react";
import { useForm } from "react-hook-form";
import { sleep } from "../../../utils/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "../../../config/firebase";
import { mostrarMensaje } from "../../../store/mensajeStore";
import { estadosAlert } from "../../../utils/types";
import { collection, doc, setDoc } from "firebase/firestore";
import useAuth from "./useAuth";
import { setCargando } from "../../../store/authStore";
import { eliminarUsuario } from "../services/authServices";

function useRegister() {
  const [cargandoRegistro, setCargandoRegistro] = React.useState(false);
  const { logear } = useAuth();
  const methods = useForm();
  const registrar = async (data) => {
    setCargandoRegistro(true);
    const { nombre, apellido, celular, email, clave } = data;
    let userCredential = {};
    try {
      userCredential = await createUserWithEmailAndPassword(
        FirebaseAuth,
        email,
        clave
      );

      const listaUsuarios = collection(FirebaseDB, "usuarios");

      await setDoc(doc(listaUsuarios, userCredential.user.uid), {
        nombre,
        apellido,
        celular,
        email,
      });

      setCargando(true);

      await logear({ email, clave });
    } catch (error) {
      //  muestrame un snackbar error de material ui
      mostrarMensaje(estadosAlert.ERROR, "Error al registrar usuario", 1000);
      /*    if (userCredential.user) {
        console.log("Use credential", userCredential);
        await eliminarUsuario(userCredential.user.uid);
      }
 */
      console.error("Error al registrar usuario:", error);
    } finally {
      setCargandoRegistro(false);
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
