import { Button, IconButton, TextField } from "@mui/material";
import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import CrearOpcionesPregunta from "./CrearOpcionesPregunta";
import { DeleteOutline } from "@mui/icons-material";

function CrearCuestionarioPreguntasForm() {
  const methods = useForm();
  const { control, handleSubmit, formState, register } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "preguntas",
  });

  const guardarPreguntas = (data) => {
    console.log("GUARDAR PREGUNTAS", data);
  };

  return (
    <div className="flex flex-col w-[50%]">
      <form onSubmit={methods.handleSubmit(guardarPreguntas)}>
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-[10px]">
            <h2 className="font-bold mb-3 ">Preguntas</h2>
            <div className="mb-3">
              <Controller
                name={`preguntas[${index}].nombre`}
                control={control}
                render={({ field }) => <TextField label="Nombre" {...field} />}
              />
            </div>

            <div className="mb-3">
              <Controller
                name={`preguntas[${index}].descripcion`}
                control={control}
                render={({ field }) => (
                  <TextField label="Descripcion" {...field} />
                )}
              />
            </div>

            <div className="mb-3">
              <CrearOpcionesPregunta control={control} index={index} />

              <IconButton
                aria-label="Eliminar pregunta"
                onClick={() => remove(index)}
              >
                <DeleteOutline />
              </IconButton>
            </div>
          </div>
        ))}
        <Button onClick={() => append({})}>Agregar Pregunta</Button>

        <div className="text-right mt-5">
          <Button
          type="submit"
          >Guardar</Button>
        </div>
      </form>
    </div>
  );
}

export default CrearCuestionarioPreguntasForm;
