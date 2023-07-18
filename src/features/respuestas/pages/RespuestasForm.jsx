import React from "react";
import { useForm } from "react-hook-form";
import instance from "../../../api/api";
import ResponderCuestionarioForm from "../components/ResponderFormularioForm";

function RespuestasForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    instance
      .post("/respuestas", data)
      .then((response) => {
        console.log("Respuesta", response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <ResponderCuestionarioForm />
    </div>
  );
}

export default RespuestasForm;
