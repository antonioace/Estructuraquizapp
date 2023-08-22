import React from "react";
import { eliminarArchivo } from "../services/fileServices";
import { useMutation, useQueryClient } from "react-query";
import { mostrarMensaje } from "../../../store/mensajeStore";
import { estadosAlert } from "../../../utils/types";

function useEliminarArchivo() {
  const queryClient = useQueryClient();
  const mutationEliminarArchivo = useMutation(eliminarArchivo, {
    onSuccess: (data) => {
      mostrarMensaje(estadosAlert.SUCCESS, "Archivo eliminado correctamente");
      queryClient.invalidateQueries("archivos");
    },
    onError: (error) => {
      mostrarMensaje(estadosAlert.ERROR, "Error al eliminar el archivo");
    },
  });
  return mutationEliminarArchivo;
}

export default useEliminarArchivo;
