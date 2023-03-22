import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CrearOpcionesPregunta from "../components/CrearOpcionesPregunta";

function CrearCuestionarioPage() {
  const { control, handleSubmit, formState, register } = useForm({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      descripcion: "",
      categoria: "",
      tipoCuestionario: "",
      preguntas: [{ nombre: "", descripcion: "", opciones: ["", ""] }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "preguntas",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div class="bg-white rounded-lg shadow-md p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row gap-[20px] sm:justify-center items-center sm:items-baseline ">
          <div className="flex flex-col gap-[10px] w-[50%]">
            <h3 className="font-bold">Información</h3>
            <Controller
              name="nombre"
              rules={{
                required: { value: true, message: "Este campo es requerido" },
              }}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Nombre"
                  {...field}
                  error={error ? true : false}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              name="descripcion"
              rules={{
                required: { value: true, message: "Este campo es requerido" },
              }}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Descripcion"
                  {...field}
                  error={error ? true : false}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="categoria"
              control={control}
              rules={{
                required: { value: true, message: "Este campo es requerido" },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  select
                  label="Categoria"
                  {...field}
                  error={error ? true : false}
                  helperText={error?.message}
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              )}
            />

            <Controller
              name="tipoCuestionario"
              control={control}
              rules={{
                required: { value: true, message: "Este campo es requerido" },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  select
                  label="Tipo del cuestionario"
                  {...field}
                  error={error ? true : false}
                  helperText={error?.message}
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              )}
            />
          </div>

          <div className="flex flex-col w-[50%]">
            {fields.map((field, index) => (
              <div key={field.id} className="flex flex-col gap-[10px]">
                <h3 className="font-bold">Preguntas</h3>
                <Controller
                  name={`preguntas[${index}].nombre`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Nombre" {...field} />
                  )}
                />
                <Controller
                  name={`preguntas[${index}].descripcion`}
                  control={control}
                  render={({ field }) => (
                    <TextField label="Descripcion" {...field} />
                  )}
                />

                <div>
                  <CrearOpcionesPregunta control={control} index={index} />

                  <Button onClick={() => remove(index)}>
                    Eliminar Pregunta
                  </Button>
                </div>
              </div>
            ))}
            <Button onClick={() => append({})}>Agregar Pregunta</Button>
          </div>
        </div>

        <Button type="submit">Guardar</Button>
      </form>
    </div>
  );
}

export default CrearCuestionarioPage;
