import { signOut } from "firebase/auth";
import React from "react";
import { FirebaseAuth } from "../config/firebase";

function useLogout() {
  const deslogear = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return {
    deslogear,
  };
}

export default useLogout;
