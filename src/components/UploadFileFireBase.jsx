import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash } from "@fortawesome/free-solid-svg-icons";

function UploadFileFireBase({}) {
  const inputFileRef = useRef(null);
  const [files, setFiles] = React.useState([]);

  const handleClickUpload = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <>
      <div className="border rounded-lg p-4 bg-[#f8f9fc]">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Archivo</h3>
          <p className="text-sm text-gray-600">
            Sube la imagen de tu cuestionario en formato PDF, Word, Excel o Zip
          </p>
        </div>
        <div className="flex flex-col items-center">
          <table className="table w-full">
            <tbody>
              {" "}
              {files?.map((file) => (
                <tr key={file.key}>
                  <td className="d-flex justify-content-between align-items-center">
                    <a href={file.url} download>
                      {file.url.split("/").pop()}
                    </a>

                    <button
                      className="btn"
                      onClick={() => handleDeleteFile(file.key)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
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
            hidden
            multiple
            accept=".pdf,.docx,.xlsx,.zip"
          ></input>
        </div>
      </div>
    </>
  );
}

export default UploadFileFireBase;
