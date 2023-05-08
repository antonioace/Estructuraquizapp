import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export const CustomListItemButton = ({ icon, primaryText, onClick }) => {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primaryText} />
    </ListItemButton>
  );
};
