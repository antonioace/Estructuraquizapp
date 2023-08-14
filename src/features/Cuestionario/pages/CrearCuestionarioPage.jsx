import React from "react";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Tab,
} from "@mui/material";

// or
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CrearOpcionesPregunta from "../components/CrearOpcionesPregunta";

import CrearCuestionarioForm from "../components/CrearCuestionarioForm";
import { useParams } from "react-router-dom";
import CrearCuestionarioPreguntasForm from "../components/CrearCuestionarioPreguntasForm";
import UploadFileFireBase from "../../../components/UploadFileFireBase";

function CrearCuestionarioPage(props) {
  const [value, setValue] = React.useState("1");
  const methods = useForm();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="bg-white rounded-lg  w-[100%]  p-5 ">
      <FormProvider {...methods}>
        <h2 className="font-bold  lg:text-[26px] mb-5">Crear cuestionario </h2>
        <hr className="mb-10" />

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Información básica" value="1" />
                <Tab label="Preguntas" value="2" />
                <Tab label="Tiempo" value="3" />
                <Tab label="Imagen" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <CrearCuestionarioForm />
            </TabPanel>
            <TabPanel value="2">
              <CrearCuestionarioPreguntasForm />
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">
              <UploadFileFireBase />
            </TabPanel>
          </TabContext>
        </Box>
      </FormProvider>
    </div>
  );
}

export default CrearCuestionarioPage;
