import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import ListItemLink from "./ListItemLink";
import { observer } from "mobx-react";

function ListItemLinkCollapse({ texto, icono, listaItems }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open); // Invierte el valor de 'open'
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        {/* Contenido del ListItemButton */}
        <ListItemIcon>{icono}</ListItemIcon>
        <ListItemText primary={texto} />
        {
          // Si 'open' es true, muestra el icono de 'ExpandLess', si no, muestra el icono de 'ExpandMore'
          open ? <ExpandLess /> : <ExpandMore />
        }
      </ListItemButton>
      {/* Contenido del Collapse */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            // Recorre la lista de items y por cada uno crea un ListItemButton
            listaItems.map((item) => (
              <ListItemLink to={item.to} primary={item.name} icon={item.icon} />
            ))
          }
        </List>
      </Collapse>
    </>
  );
}

export default observer(ListItemLinkCollapse);
