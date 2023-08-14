import { action, observable } from "mobx";

export const cuestionarioStore = observable({
  cuestionario: {
    informacionBasica: null,
    tiempo: null,
    preguntas: null,
  },
  estados: null,
  listaCuestionarios: [],
  
});

export const setInformacionBasicaCuestionario = action((informacionBasica) => {
  cuestionarioStore.cuestionario.informacionBasica = informacionBasica;
});
export const setTiempoCuestionario = action((tiempo) => {
  cuestionarioStore.cuestionario.tiempo = tiempo;
});
export const setPreguntasCuestionario = action((preguntas) => {
  cuestionarioStore.cuestionario.preguntas = preguntas;
});
export const setListaCuestionarios = action((listaCuestionarios) => {
  cuestionarioStore.listaCuestionarios = listaCuestionarios;
});
