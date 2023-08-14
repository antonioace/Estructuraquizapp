import React from "react";
import { useQuery } from "react-query";
import { obtenerCuestionario } from "../services/CuestionarioService";
import { mostrarMensaje } from "../../../store/mensajeStore";

function useObtenerCuestionarios() {
  const query = useQuery("cuestionarios", obtenerCuestionario, {
    initialData: {
      data: [
        {
          _id: "Hola",
          id: "1",
          nombre: "Cuestionario de prueba",
          descripcion: "Este es un cuestionario de prueba",
          categoria: [
            "Geografía",
            "Historia",
            "Ciencia",
            "Arte",
            "Deportes",
            "Entretenimiento",
            "Misceláneo",
          ],
          idUsuario: "string",
          preguntas: [
            {
              nombre: "Pregunta 1",
              descripcion: "¿Cuál es la capital de Francia?",
              opciones: ["París", "Londres", "Madrid", "Roma"],
            },
            {
              nombre: "Pregunta 2",
              descripcion: "¿Cuál es el color del cielo?",
              opciones: ["Azul", "Verde", "Rojo", "Amarillo"],
            },
          ],
        },
      ],
    },
    onError: (error) => {
      mostrarMensaje("error", "Error al obtener cuestionarios");
    },
  });

  return query;
}

export default useObtenerCuestionarios;
