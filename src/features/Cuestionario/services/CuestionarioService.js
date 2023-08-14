import instance from "../../../api/api";

export const crearCuestionario = (cuestionario) => {};
export const listarCuestionarios = (cuestionario) => {};
export const obtenerCuestionario = () => {
  return instance.get("/cuestionarios");
};
export const actualizarCuestionario = () => {};
