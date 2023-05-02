import { action, observable } from "mobx";
import { sleep } from "../utils/utils";

export const mensajeStore = observable({
  open: false,
  estado: null,
  mensaje: null,
});
export const setEstado = action((estado) => {
  mensajeStore.estado = estado;
});
export const setMensaje = action((mensaje) => {
  mensajeStore.mensaje = mensaje;
});

export const setOpen = action((open) => {
  mensajeStore.open = open;
});
export const mostrarMensaje = action(async (estado, mensaje) => {
  setEstado(estado);
  setMensaje(mensaje);
  setOpen(true);
  await sleep(2000);

  setOpen(false);
 
});
