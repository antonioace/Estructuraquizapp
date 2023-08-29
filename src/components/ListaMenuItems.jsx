import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import React from "react";
import {
  Add,
  Assignment,
  CheckCircle,
  Close,
  ExitToAppRounded,
  ExpandLess,
  ExpandMore,
  Home,
  Person,
  Refresh,
  Settings,
  TrendingUp,
  Update,
  ViewList,
} from "@mui/icons-material";
import ListItemLink from "./ListItemLink";
import ListItemLinkCollapse from "./ListItemLinkCollapse";
import { CustomListItemButton } from "./CustomLinkItemComponente";
import useLogout from "../hooks/useLogout";
import { observer } from "mobx-react";
import ListaUsuarios from "../features/Cuestionario/pages/ListaUsuarios";

const listaItemsCuestionarios = [
  {
    name: "Crear Cuestionario",
    icon: <Add />,
    to: "/dashboard/crear-cuestionario",
  },

  {
    name: "Ver Cuestionarios",
    icon: <ViewList />,
    to: "/dashboard/listar-cuestionarios",
  },
];

function ListaMenuItems() {
  const { deslogear } = useLogout();
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: "#aeaeae",
          fontSize: "16px",
          marginTop: "30px",
          marginBottom: "20px",
          fontWeight: "bold",
          paddingLeft: "20px",
        }}
      >
        MENU
      </Typography>
      <List>
        <ListItemLink
          to="inicio"
          primary="Inicio"
          icon={<Home />}
        />
        <ListItemLinkCollapse
          texto="Cuestionarios"
          icono={<Assignment />}
          listaItems={listaItemsCuestionarios}
        />
        <ListItemLink
          to="estadisticas"
          primary="Estadisticas"
          icon={<TrendingUp />}
        />
        <ListItemLink
          to="crear-respuesta"
          primary="Respuesta"
          icon={<CheckCircle />}
        />
         <ListItemLink
          to="usuarios"
          primary="Usuarios"
          icon={<Person />}
        />
        <Typography
          variant="h2"
          sx={{
            color: "#aeaeae",
            fontSize: "16px",
            marginTop: "30px",
            marginBottom: "20px",
            fontWeight: "bold",
            paddingLeft: "20px",
          }}
        >
          AYUDA
        </Typography>

        <ListItemLink
          to="informacion-usuario"
          primary="Configuraciones"
          icon={<Settings />}
        />
      </List>

      <div className="absolute bottom-0 w-full mb-2 px-4">
        <CustomListItemButton
          icon={<ExitToAppRounded />}
          primaryText={"Cerrar sesión"}
          onClick={deslogear}
        />
      </div>
    </Box>
  );
}

export default observer(ListaMenuItems);
