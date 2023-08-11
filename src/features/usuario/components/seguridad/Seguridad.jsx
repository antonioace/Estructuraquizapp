import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Seguridad = () => {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 flex  flex-col gap-4 w-full">
      {/* Inputs de cambiar contraseña */}
      <TextField
        label="Contraseña actual"
        type="password"
        variant="outlined"
        size="small"
      />
      <TextField
        label="Nueva contraseña"
        type="password"
        variant="outlined"
        size="small"
      />
      <TextField
        label="Confirmar contraseña"
        type="password"
        variant="outlined"
        size="small"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button>Guardar</Button>
      </Box>
    </div>
  );
};

export default Seguridad;
