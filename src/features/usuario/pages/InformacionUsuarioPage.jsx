import React from "react";
import Sidebar from "../../../components/Sidebar";
import { TextField } from "@mui/material";

function InformacionUsuarioPage() {
  return (
    <Sidebar>
      <div
        className="W-[100%] h-[100%] m-[100px]"
      >
        <label>Hola</label>
        <TextField />
      </div>
    </Sidebar>
  );
}

export default InformacionUsuarioPage;
