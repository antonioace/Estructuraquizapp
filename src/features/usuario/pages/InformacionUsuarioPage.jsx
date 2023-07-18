import React from "react";
import Sidebar from "../../../components/Sidebar";
import { TextField } from "@mui/material";
import useUser from "../../../hooks/useUser";
import Spinner from "../../../components/Spinner";
import EditIcon from "@mui/icons-material/Edit";
import InformacionPersonal from "../components/InformacionPersonal";
import ImagenPerfil from "../components/ImagenPerfil";
import DireccionPerfil from "../components/DireccionPerfil";
const claseActiva = "bg-[#e9f0ff] p-3 rounded-2xl  text-[#3e75e0]";
function InformacionUsuarioPage() {
  const { cargando, usuario } = useUser();
  const [activaOpcion, setActivaOpcion] = React.useState(true);

  const [prueba, setPrueba] = React.useState(false);
  return (
    <>
      <div className="p-5 h-full flex flex-col">
        {cargando && (
          <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-white opacity-75">
            <Spinner />
          </div>
        )}
        <h2 className="font-bold  sm:text-[26px] mb-5">
          Configuración de la cuenta{" "}
        </h2>
        <hr className="mb-10" />
        <div className="flex flex-col sm:flex-row gap-5 h-full  ">
          <div className="w-[20%] border-r-[#f4f9f] border-r flex flex-row sm:flex-col max-w-full">
            <div className="mb-6 w-fit ">
              <button
                className={`text-[#c4cbd7] font-bold text-left ${
                  activaOpcion ? claseActiva : ""
                }`}
              >
                Mi perfil
              </button>
            </div>
            <div className="mb-6">
              <button className="text-[#c4cbd7] font-bold">Seguridad</button>
            </div>
            <div className="mb-6">
              <button className="text-[#c4cbd7] font-bold">
                Notificaciones
              </button>
            </div>
            <div className="mb-6">
              <button className="text-[#c4cbd7] font-bold">
                Exportación de datos
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col  gap-7">
            <ImagenPerfil />
            <InformacionPersonal />
            <DireccionPerfil />
          </div>
        </div>

        {usuario && (
          <div className="flex flex-col  p-5 border-spacing-2 "></div>
        )}
      </div>
    </>
  );
}

export default InformacionUsuarioPage;
