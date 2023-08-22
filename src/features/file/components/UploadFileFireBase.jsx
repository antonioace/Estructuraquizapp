import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import useSubirArchivo from "../hooks/useSubirArchivo";
import useObtenerArchivos from "../hooks/useObtenerArchivos";
import ModalVistaPrevia from "./ModalVistaPrevia";
import useEliminarArchivo from "../hooks/useEliminarArchivo";
import Spinner from "../../../components/Spinner";

// hazme un funcion axios usando multipart/form-data

function UploadFileFireBase({}) {
  const inputFileRef = useRef(null);
  const [files, setFiles] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [imagenUrl, setImagenUrl] = React.useState("");
  const mutationSubirArchivo = useSubirArchivo();
  const mutationEliminarArchivo = useEliminarArchivo();
  const queryArchivos = useObtenerArchivos();

  const closeModal = () => {
    setOpen(false);
  };

  const handleClickUpload = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };
  const handleUploadFile = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      mutationSubirArchivo.mutate(file);
    }
  };

  const handleDeleteFile = (file) => {
    mutationEliminarArchivo.mutate(file._id);
  };

  const handlePreviewFile = (file) => {
    setImagenUrl(file.url);
    setOpen(true);
  };
  React.useEffect(() => {
    if (queryArchivos?.data) {
      console.log("queryArchivos", queryArchivos.data);
      setFiles(queryArchivos?.data?.data || []);
    }
  }, [queryArchivos.data]);
  console.log("Openn", open);

  return (
    <>
      <ModalVistaPrevia
        imagenUrl={imagenUrl}
        closeModal={closeModal}
        open={open}
      />
      <div className="border rounded-lg p-4 bg-[#f8f9fc] relative">
        {queryArchivos.isFetching && (
          <div className="absolute w-full h-full opacity-50 z-20">
            <div className="flex justify-center items-center h-full w-full">
              <div className="custom-loader" />
            </div>
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Archivo</h3>
          <p className="text-sm text-gray-600">
            Sube la imagen de tu cuestionario en formato PDF, Word, Excel o Zip
          </p>
        </div>
        <div className="flex flex-col items-center">
          <table className="table w-full">
            <tbody>
              {files?.map((file) => (
                <tr key={file.key}>
                  <td className="flex justify-between items-center">
                    <a href={file.url} download>
                      {file.url.split("/").pop()}
                    </a>
                    <div>
                      <button
                        className="btn mr-2"
                        onClick={() => handlePreviewFile(file)}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="btn"
                        onClick={() => handleDeleteFile(file)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className="bg-gray-500 text-white py-2 px-4 rounded mt-2"
            onClick={handleClickUpload}
          >
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Subir Archivo
          </button>
          <input
            type={"file"}
            ref={inputFileRef}
            onChange={handleUploadFile}
            hidden
            multiple
            /*   accept=".pdf,.docx,.xlsx,.zip" */
          ></input>
        </div>
      </div>
    </>
  );
}

export default UploadFileFireBase;
