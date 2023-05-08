import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
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

function CrearCuestionarioPage(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div class="bg-white rounded-lg shadow-md p-4 w-[100%] ">
      <h1 className="font-bold text-[28px]">Crear Cuestionario</h1>

      <hr className="mb-3" />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Información básica" value="1" />
              <Tab label="Preguntas" value="2" />
              <Tab label="Tiempo" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CrearCuestionarioForm />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default CrearCuestionarioPage;
