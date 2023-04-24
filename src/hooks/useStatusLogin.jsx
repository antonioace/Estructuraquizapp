import React from "react";

import { sleep } from "../utils/utils";

function useStatusLogin() {
  const [cargando, setCargando] = React.useState(false);
  const checkStatusLogin = async () => {
    setCargando(true);
    console.log("checkStatusLogin");

    await sleep(2000);
    setCargando(false);
  };
  return { checkStatusLogin, cargando };
}

export default useStatusLogin;
