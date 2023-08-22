import React from "react";
import { useQuery } from "react-query";
import { obtenerArchivos } from "../services/fileServices";

function useObtenerArchivos() {
  const queryArchivos = useQuery("archivos", (data) => {
    console.log("Data", data);
    return obtenerArchivos();
  });
  return queryArchivos;
}

export default useObtenerArchivos;
