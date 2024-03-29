import { Button, IconButton, TextField } from "@mui/material";

import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

function CrearOpcionesPregunta({ control, index }) {
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: `preguntas[${index}].opciones`,
  });

  return (
    <div>
      <h4 className="font-bold">Opciones</h4>
      <div className="flex flex-col mt-3">
        <div className="flex flex-row flex-wrap gap-2">
          {fields.map((opcion, opIndex) => (
            <div key={opcion.id}>
              <Controller
                key={`${opcion.id}-opcion-${opIndex}`}
                name={`preguntas[${index}].opciones[${opIndex}].nombre`}
                rules={{
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                }}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={`Opción ${opIndex + 1}`}
                    value={typeof field.value === "object" ? "" : field.value}
                    onChange={(e) => field.onChange(e)}
                    error={error ? true : false}
                    helperText={error?.message}
                  >
                    {console.log("Fielddddd", error)}
                  </TextField>
                )}
              />

              <IconButton
                aria-label="Eliminar opción"
                onClick={() => remove(opIndex)}
              >
                <RemoveCircleOutline />
              </IconButton>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <IconButton
          aria-label="Agregar opción"
          onClick={() => {
            append({});
          }}
        >
          <AddCircleOutline />
        </IconButton>
      </div>
    </div>
  );
}

export default CrearOpcionesPregunta;
