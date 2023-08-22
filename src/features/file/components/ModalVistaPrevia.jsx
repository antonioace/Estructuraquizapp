import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faClose,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const modalRoot = document.getElementById("modal-archivo");

function ModalVistaPrevia({ imagenUrl, closeModal, open }) {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }} // Opacidad inicial de 0
      animate={{ opacity: 1 }} // Animación para cambiar la opacidad a 1
      exit={{ opacity: 0 }} // Animación al cerrar para volver a la opacidad de 0
      className="fixed inset-0 flex items-center justify-center z-[1201]"
    >
      <div className="fixed inset-0 bg-black opacity-50 w-[100%] h-[100%] "></div>
      <div className="bg-white p-4 rounded-md shadow-md z-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Vista Previa</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faCircleXmark} style={{
                fontSize:"24px"
            }} />
          </button>
        </div>
        <div className="flex justify-center">
          {imagenUrl && (
            <img
              src={imagenUrl}
              alt="Vista Previa"
              className="h-[500px] w-[500px]"
            />
          )}
        </div>
      </div>
    </motion.div>,
    modalRoot
  );
}

export default ModalVistaPrevia;
