import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import React from "react";
import {
  Add,
  Assignment,
  Close,
  ExpandLess,
  ExpandMore,
  Refresh,
  TrendingUp,
  Update,
  ViewList,
} from "@mui/icons-material";
import ListItemLink from "./ListItemLink";
import ListItemLinkCollapse from "./ListItemLinkCollapse";
import { CustomListItemButton } from "./CustomLinkItemComponente";
import useLogout from "../hooks/useLogout";
import { observer } from "mobx-react";

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
const {deslogear}=useLogout()
  return (
    <List>
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
      <CustomListItemButton icon={<Close />} primaryText={"Cerrar sesión"} onClick={deslogear} />
    </List>
  );
}

export default observer(ListaMenuItems);
