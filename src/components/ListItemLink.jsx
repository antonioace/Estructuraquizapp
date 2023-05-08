import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { observer } from "mobx-react";
import { Link, NavLink } from "react-router-dom";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItem
        button
        component={NavLink}
        to={to}
        sx={{
          "&.active": {
            backgroundColor: "#f5f5f5",
            color: "#3f51b5",
            "& .MuiListItemIcon-root": {
              color: "#3f51b5",
            },
          },
        }}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
export default observer(ListItemLink);
