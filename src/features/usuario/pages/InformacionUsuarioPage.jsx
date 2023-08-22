import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { TextField } from "@mui/material";
import useUser from "../../../hooks/useUser";
import Spinner from "../../../components/Spinner";
import EditIcon from "@mui/icons-material/Edit";
import InformacionPersonal from "../components/informacionPersonal/InformacionPersonal";

import SidebarPerfilOpcion from "../components/SidebarPerfilOpcion";
import { listaOpciones } from "../utils/opcionesPerfilUsuario";
import Facturacion from "../components/facturacion/Facturacion";
import ExportacionDatos from "../components/exportacionesDatos/ExportacionDatos";
import Notificaciones from "../components/notificaciones/Notificaciones";
import Seguridad from "../components/seguridad/Seguridad";
import UploadFileFireBase from "../../file/components/UploadFileFireBase";


function InformacionUsuarioPage() {
  const { cargando, usuario } = useUser();

  const [activaOpcion, setActivaOpcion] = useState(listaOpciones[0].key);
  const handleButtonClick = (index) => {
    setActivaOpcion(index);
    // Aquí puedes agregar lógica adicional relacionada con la navegación o cambios en el estado según el botón seleccionado
  };

  const opcionesSidebarComponente = {
    // en camel case
    miPerfil: <InformacionPersonal />,
    seguridad: <Seguridad />,
    notificaciones: <Notificaciones />,
    exportacionDatos: <ExportacionDatos />,
    facturacion: <Facturacion />,
    archivos: <UploadFileFireBase />,
    default: <h1>Default</h1>,
  };
  const ComponenteActivo = opcionesSidebarComponente[activaOpcion || "default"];

  return (
    <>
      <div className="p-5 h-full flex flex-col">
        {cargando && (
          <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-white opacity-75">
            <Spinner />
          </div>
        )}
        <h2 className="font-bold  lg:text-[26px] mb-5">
          Configuración de la cuenta{" "}
        </h2>
        <hr className="mb-10" />
        <div className="flex flex-col lg:flex-row gap-5 h-full  ">
          <div className="lg:w-[20%] lg:border-r-[#f4f9f] lg:border-r flex flex-row lg:flex-col max-w-full flex-wrap gap-2">
            {listaOpciones?.map((opcion) => (
              <SidebarPerfilOpcion
                key={opcion.key}
                text={opcion.label}
                active={activaOpcion === opcion.key}
                onClick={() => handleButtonClick(opcion.key)}
              />
            ))}
          </div>
          <div className="w-full flex flex-col  gap-7">{ComponenteActivo}</div>
        </div>

        {usuario && (
          <div className="flex flex-col  p-5 border-spacing-2 "></div>
        )}
      </div>
    </>
  );
}

export default InformacionUsuarioPage;
