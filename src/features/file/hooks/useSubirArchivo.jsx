import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { subirArchivo } from "../services/fileServices";
import { mostrarMensaje } from "../../../store/mensajeStore";
import { estadosAlert } from "../../../utils/types";

function useSubirArchivo() {
  const queryClient = useQueryClient();
  const mutationSubirArchivo = useMutation(subirArchivo, {
    onSuccess: (data) => {
      console.log("data", data);
      queryClient.invalidateQueries("archivos");
      mostrarMensaje(estadosAlert.SUCCESS, "Archivo subido correctamente");
    },
    onError: (error) => {
      mostrarMensaje(estadosAlert.ERROR, "Error al subir el archivo");
    },
  });
  return mutationSubirArchivo;
}

export default useSubirArchivo;
