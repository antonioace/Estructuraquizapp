import { Delete, Edit } from "@mui/icons-material";
import { Drawer, IconButton, TextField } from "@mui/material";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
import React, { useState } from "react";
import CrearCuestionarioPage from "./CrearCuestionarioPage";

const rows = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1",
    categoria: "Categoría 1",
    tipoFormulario: "Tipo 1",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2",
    categoria: "Categoría 2",
    tipoFormulario: "Tipo 2",
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Descripción del producto 3",
    categoria: "Categoría 3",
    tipoFormulario: "Tipo 3",
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion: "Descripción del producto 4",
    categoria: "Categoría 4",
    tipoFormulario: "Tipo 4",
  },
  {
    id: 5,
    nombre: "Producto 5",
    descripcion: "Descripción del producto 5",
    categoria: "Categoría 5",
    tipoFormulario: "Tipo 5",
  },
];

function ListaCuestionarioPage() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const abrirDrawer = () => {
    setOpen(true);
  };
  const columns = [
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "descripcion", headerName: "Descripción", width: 300 },
    { field: "categoria", headerName: "Categoría", width: 150 },
    { field: "tipoFormulario", headerName: "Tipo de formulario", width: 200 },
    {
      field: "acciones",
      headerName: "Acciones",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            onClick={() => {
              abrirDrawer();
            }}
          >
            <Edit />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </>
      ),
    },
  ];

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const handlePageSizeChange = (params) => {
    console.log("Params ", params);
    setPageSize(params.pageSize);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        page={page}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        components={{
          Toolbar: GridToolbar,
        }}
      />
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        PaperProps={{
          style: { width: "100%", padding: "25px", maxWidth: "700px" },
        }}
      >
        <h3 className="font-bold text-[20px]">Editar cuestionario</h3>
        <hr className="mb-5" />
        <CrearCuestionarioPage />
        {/*     <TextField label="hola"></TextField>
        <TextField label="hola"></TextField>
        <TextField label="hola"></TextField>
        <TextField label="hola"></TextField>
        <TextField label="hola"></TextField>
        <TextField label="hola"></TextField>
        <TextField label="hola"></TextField> */}
      </Drawer>
    </div>
  );
}

export default ListaCuestionarioPage;
