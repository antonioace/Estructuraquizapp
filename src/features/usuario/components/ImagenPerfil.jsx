import { Edit } from "@mui/icons-material";
import React from "react";

function ImagenPerfil() {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 flex  flex-col sm:flex-row sm:items-center space-x-4 w-full">
      <div className="flex-shrink-0">
        <img
          src="https://e7.pngegg.com/pngimages/274/947/png-clipart-computer-icons-user-business-believer-business-service-people.png"
          alt="Imagen de perfil"
          className="w-16 h-16 rounded-full bg-white"
        />
      </div>
      <div>
        <h3 className="text-xl font-medium">Nombre de la persona</h3>
        <p className="text-gray-600">Rango</p>
      </div>
      <div className="flex-grow"></div>
      <div>
        <Edit className="text-gray-600 hover:text-gray-900 cursor-pointer" />
      </div>
    </div>
  );
}

export default ImagenPerfil;
