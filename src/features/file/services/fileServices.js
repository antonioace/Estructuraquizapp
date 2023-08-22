import instance from "../../../api/api";

export const subirArchivo = (file) => {
  const formData = new FormData();
  formData.append("filexxx", file);

  return instance.post("files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const obtenerArchivos = () => {
  return instance.get("files");
};

export const eliminarArchivo = (id) => {
  return instance.delete(`files/${id}`);
};
