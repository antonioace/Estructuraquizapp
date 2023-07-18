import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function InformacionPersonal() {
  const [estaEditando, setEstaEditando] = React.useState(false);
  const cambiarEstadoEditando = (e) => {
    setEstaEditando(!estaEditando);
  };
  return (
    <div className="rounded-2xl border border-gray-200 p-5 w-full flex flex-col">
      <div className="flex justify-between mb-4 ">
        <h3 className="font-bold text-lg">Información personal</h3>
        <button
          className="flex items-center text-gray-500 hover:text-gray-700"
          onClick={cambiarEstadoEditando}
        >
          <Edit className="mr-1" />
        </button>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col  mb-4">
          <h3 className="font-bold text-gray-500 mr-2">Nombre</h3>
          <p className="">Valor del nombre</p>
        </div>
        <div className="flex  flex-col ">
          <h3 className="font-bold text-gray-500 mr-2">Campo 2</h3>
          <p className="">Valor del campo 2</p>
        </div>
        <div className="flex flex-col  mb-4">
          <h3 className="font-bold text-gray-500 mr-2">Nombre</h3>
          <p className="">Valor del nombre</p>
        </div>
        <div className="flex  flex-col ">
          <h3 className="font-bold text-gray-500 mr-2">Campo 2</h3>
          <p className="">Valor del campo 2</p>
        </div>
      </div>
      {estaEditando && (
        <div className="flex justify-end">
        
          <Button title="Guardar">Guardar</Button>
        </div>
      )}
    </div>
  );
}

export default InformacionPersonal;
