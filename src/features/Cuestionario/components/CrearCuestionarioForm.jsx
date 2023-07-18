import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import CrearOpcionesPregunta from "./CrearOpcionesPregunta";

function CrearCuestionarioForm() {
  const { control, handleSubmit, formState, register } = useForm({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      descripcion: "",
      categoria: "",
      tipoCuestionario: "",
    },
  });


  const onSubmit = (data) => {
    console.log("DATA",data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col sm:flex-row gap-[20px] sm:justify-center items-center sm:items-baseline ">
        <div className="flex flex-col gap-[10px] w-[100%]">
        
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
                multiline
                rows={4}
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

        {/*  */}
      </div>

      <Button type="submit"
     
      >Guardar</Button>
    </form>
  );
}

export default CrearCuestionarioForm;
