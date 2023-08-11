import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useFieldArray, useForm, useFormContext } from "react-hook-form";
import CrearOpcionesPregunta from "./CrearOpcionesPregunta";
import { tiposDeCuestionarios } from "../utils/tiposCuestionarios";

function CrearCuestionarioForm() {
  const { control, handleSubmit, formState, register } = useFormContext({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      descripcion: "",
      categoria: "",
      tipoCuestionario: "",
    },
  });

  const onSubmit = (data) => {
    console.log("DATA", data);
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
                rows={3}
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
              <FormControl>
                <InputLabel id="demo-multiple-name-label">Categoria</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  multiple
                  label="Categoria"
                  {...field}
                  error={error ? true : false}
                  helperText={error?.message}
                  style={{ textAlign: "left" }}
                ></Select>
              </FormControl>
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
                {tiposDeCuestionarios.map((tipo, index) => (
                  <MenuItem key={index} value={tipo.key}>
                    {tipo.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </div>

        {/*  */}
      </div>

      <Button type="submit">Guardar</Button>
    </form>
  );
}

export default CrearCuestionarioForm;
