import React from "react";
import { setCargando } from "../../../store/authStore";

function useAuth() {
  const logear = () => {
    setCargando(true);
    console.log("Logear");
    setCargando(false);
  };
  return {
    logear,
    
  };
}

export default useAuth;
