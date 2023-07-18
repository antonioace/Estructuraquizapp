import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuInfo from "./MenuInfo";
import ListaMenuItems from "./ListaMenuItems";

const drawerWidth = 240;

function Sidebar(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        backgroundColor: "#ffffff",
        height: "100vh",
      }}
    >
      <Toolbar>
        <div className="flex flex-row justify-center items-center w-[100%]">
          <img
            className="max-h-[120px] flex justify-center items-center max-w-[240]"
            src="https://ih1.redbubble.net/image.2386420274.5433/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="Workflow"
          />
        </div>
      </Toolbar>
      <Divider />
      <ListaMenuItems />
    </div>
  );

  return (
    <>
      <MenuInfo abrirMenuCelular={handleDrawerToggle} />
      <Box sx={{ display: "flex", position: "relative" }}>
        <CssBaseline />
        {/* */}
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        {children}
      </Box>
    </>
  );
}

export default Sidebar;
