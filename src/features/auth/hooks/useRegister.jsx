import React from "react";
import { useForm } from "react-hook-form";
import { sleep } from "../../../utils/utils";

function useRegister() {
  const [cargando, setCargando] = React.useState(false);
  const methods = useForm();
  const registrar = async (data) => {
    setCargando(true);
    await sleep(2000);
    console.log("Registrandooo");
    setCargando(false);
  };
  return {
    cargando,
    registrar,
    methods,
  };
}

export default useRegister;
