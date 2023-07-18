import instance from "../../../api/api";

export const registrarUsuario = (data) => {
  return instance.post("usuarios", { ...data });
};

export const obtenerUsuarioLogeado = () => {
  return instance.get("usuarios/profile");
};

export const logearUsuario = (data) => {
  return instance.post("usuarios/login", { ...data });
};

export const checkStatus = () => {
  return instance.get("usuarios/checktoken");
};
