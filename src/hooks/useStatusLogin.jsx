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

function useStatusLogin() {
  const checkStatusLogin = async () => {
    setCargandoAuth(true);
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        setUsuario(null);
        setLogear(false);
      } else {
        setUsuario(user);
        setLogear(true);
      }

      setCargandoAuth(false);
    });
  };
  return { checkStatusLogin };
}

export default useStatusLogin;
