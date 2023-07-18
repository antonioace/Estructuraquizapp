import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { color } from "framer-motion";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Cuestionarios",
    ruta: "/dashboard/listar-cuestionarios",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function MenuInfo({ abrirMenuCelular }) {
  const { deslogear } = useLogout();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    navigate(page.ruta);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${240}px)` },
        backgroundColor: "#fff",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            onClick={abrirMenuCelular}
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none", xs: "block" } }}
          >
            <MenuIcon />
          </IconButton>
         {/*  <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu(page);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 0 ,position:"absolute",right:"0"}}>
            <Tooltip title="Informacion del perfil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/dashboard/informacion-usuario");
                    }}
                  >
                    <ListItemText primary="Ver perfil" />
                  </ListItemButton>
                </ListItem>
              </MenuItem>

              <MenuItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      deslogear();
                    }}
                  >
                    <ListItemText primary="Cerrar sesión" />
                  </ListItemButton>
                </ListItem>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuInfo;
