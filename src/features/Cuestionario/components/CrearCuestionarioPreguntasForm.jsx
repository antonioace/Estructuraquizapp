import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CrearOpcionesPregunta from "./CrearOpcionesPregunta";
import { DeleteOutline } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { tiposDePreguntas } from "../utils/tiposPreguntas";

function CrearCuestionarioPreguntasForm() {
  const methods = useFormContext();
  const { control, handleSubmit, formState, register } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "preguntas",
  });

  const guardarPreguntas = (data) => {
    console.log("me ejecutooo");
    console.log("GUARDAR PREGUNTAS", data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <form onSubmit={methods.handleSubmit(guardarPreguntas)}>
        {fields.map((field, index) => (
          <div key={field.id} className="mb-5">
            <Accordion
              // dale un margin botttom cuando se expande
              elevation={0}
              key={field.id}
              sx={{
                border: "1px solid #edf0f2",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#f9fafb",
                }}
              >
                <Typography>{`Pregunta ${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                    }}
                  >
                    <Box className="mb-3">
                      <Controller
                        shouldUnregister={true}
                        rules={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          }
                        }}
                        name={`preguntas[${index}].nombre`}
                        control={control}
                        render={({ field, fieldState }) => (
                          <TextField
                            label="Nombre"
                            value={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                            }}
                            helperText={fieldState?.error?.message}
                            error={fieldState?.error ? true : false}
                            sx={{
                              width: "100%",
                            }}
                          ></TextField>
                        )}
                      />
                    </Box>

                    <div className="mb-3">
                      <Controller
                        shouldUnregister={true}
                        rules={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          }
                        }}
                        name={`preguntas[${index}].descripcion`}
                        control={control}
                        defaultValue={""}
                        render={({ field, fieldState }) => (
                          <TextField
                            label="Descripcion"
                            value={field.value}
                            onChange={field.onChange}
                            helperText={fieldState?.error?.message}
                            error={fieldState?.error ? true : false}
                            sx={{
                              width: "100%",
                            }}
                            rows={3}
                            multiline
                          />
                        )}
                      />
                    </div>
                    <div className="mb-3">
                      <Controller
                        shouldUnregister={true}
                        defaultValue={""}
                        rules={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          }
                        }}
                        name={`preguntas[${index}].tipo`}
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <TextField
                            defaultValue={""}
                            select
                            label="Tipo de pregunta"
                            {...field}
                            helperText={error?.message}
                            error={error ? true : false}
                            sx={{
                              width: "100%",
                            }}
                          >
                            {tiposDePreguntas?.map((tipoPregunta) => {
                              return (
                                <MenuItem
                                  value={tipoPregunta.key}
                                  key={tipoPregunta.key}
                                >
                                  {tipoPregunta.label}
                                </MenuItem>
                              );
                            })}
                          </TextField>
                        )}
                      />
                    </div>
                    <CrearOpcionesPregunta control={control} index={index} />
                  </Box>

                  <div className="mb-3">
                    <IconButton
                      aria-label="Eliminar pregunta"
                      onClick={() => remove(index)}
                    >
                      <DeleteOutline />
                    </IconButton>
                  </div>
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            append({
              nombre: "",
              descripcion: "",
              tipo: "",
            });
          }}
        >
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{
              fontSize: "1.5rem",
            }}
          />
        </button>

        <div className="text-right mt-5">
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Box>
  );
}

export default CrearCuestionarioPreguntasForm;
