import React from "react";

import { sleep } from "../utils/utils";
import {
  setCargando as setCargandoAuth,
  setLogear,
  setUsuario,
} from "../store/authStore";
import {
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import { FirebaseAuth } from "../config/firebase";
import { useQuery } from "react-query";
import { checkStatus } from "../features/auth/services/authServices";

function useStatusLogin() {
  const verificarToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await checkStatus(token);

        setLogear(res?.data?.success);
      } catch (error) {
        setLogear(false);
      } finally {
        setCargandoAuth(false);
      }
    } else {
      setLogear(false);
      setCargandoAuth(false);
    }
  };
  return {
    verificarToken,
  };
}

export default useStatusLogin;
