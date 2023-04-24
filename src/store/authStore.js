import { action, observable } from "mobx";

export const authStore = observable({
  usuario: null,
  cargando: false,
  logear: false,
});

export const setUsuario = action((usuario) => {
  authStore.usuario = usuario;
});

export const setCargando = action((cargando) => {
  authStore.cargando = cargando;
});

export const setLogear = action((logear) => {
  authStore.logear = logear;
});
