import { deleteUser } from "firebase/auth";

const login = async (email, password) => {
  console.log("Este es el login");
};
const registrar = async (data) => {
  console.log("Este es el registro");
};

export const eliminarUsuario = async (data) => {
  try {
    const resp = await  deleteUser(data);
  } catch (error) {
    console.log("Error", error);
  }
};
