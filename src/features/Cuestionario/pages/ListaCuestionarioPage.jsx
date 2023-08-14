import { Delete, Edit } from "@mui/icons-material";
import { Box, Drawer, IconButton, TextField } from "@mui/material";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
import React, { useState } from "react";
import CrearCuestionarioPage from "./CrearCuestionarioPage";
import useObtenerCuestionarios from "../hooks/useObtenerCuestionarios";
import { query } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function ListaCuestionarioPage() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const queryCuestionrios = useObtenerCuestionarios();
  const [open, setOpen] = useState(false);
  const abrirDrawer = () => {
    setOpen(true);
  };
  const columns = [
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "descripcion", headerName: "Descripción", width: 300 },
    { field: "categoria", headerName: "Categoría", width: 150 },
    { field: "idUsuario", headerName: "ID Usuario", width: 150 }, // Agregado el ID de Usuario
    {
      field: "acciones",
      headerName: "Acciones",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "10px",
          }}
        >
          <button
            onClick={() => {
              abrirDrawer();
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </Box>
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

  const dataCuestionarios = React.useMemo(() => {
    if (queryCuestionrios.data?.data) {
      return queryCuestionrios.data?.data.map((cuestionario) => ({
        ...cuestionario,
        id: cuestionario._id,
      }));
    }
    return [];
  }, [queryCuestionrios.data?.data]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={dataCuestionarios || []}
        columns={columns}
        loading={queryCuestionrios.isFetching}
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
      </Drawer>
    </div>
  );
}

export default ListaCuestionarioPage;
