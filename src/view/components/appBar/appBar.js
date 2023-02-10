/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../assets/images/cruzeiro-educacional.png";
import logoVirtual from "../../../assets/images/logo-cruzeiro-do-sul-virtual.png";
import "./appBar.css";
import { useStore } from "../../../App";

const drawerWidth = 240;
const navItems = [
  {
    name: "Cruzeiro do sul virtual",
    link: "https://www.cruzeirodosulvirtual.com.br/",
  },
  {
    name: "Institucional",
    link: "https://cruzeirodosuledubr0-my.sharepoint.com/personal/cassiam_cruzeirodosul_edu_br/_layouts/15/stream.aspx?id=%2Fpersonal%2Fcassiam%5Fcruzeirodosul%5Fedu%5Fbr%2FDocuments%2FTour%20Virtual%2FCruzeiro%20do%20Sul%20Virtual%2FInstitucional%20EaD%20%28Source%29%5FCorrigido%2Emp4&ga=1",
  },
  {
    name: "Jornada do estudante",
    link: "",
  },
];

const navItems2 = [
  {
    name: "Instituições certificadoras",
    link: "",
  },
  {
    name: "Nosso Jeito",
    link: "https://nossojeitodeensinar.com.br/",
  },
  {
    name: "Educacional",
    link: "https://www.cruzeirodosuleducacional.com.br/",
  },
  {
    name: "Tours Virtuais",
    link: "",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isMainMenuVisible = useStore((state) => state.isMainMenuVisible);
  const isNucleosPageVisible = useStore((state) => state.isNucleosPageVisible);
  const isPolosPageVisible = useStore((state) => state.isPolosPageVisible);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* <img src={logo} alt="logo" /> */}
      </Typography>
      <Divider />
      {isMainMenuVisible || isNucleosPageVisible || isPolosPageVisible ? (
        <List>
          {navItems.map((item, index) => (
            <a key={index} href={item.link}>
              <ListItem disablePadding>
                <ListItemButton class={"item"} sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </a>
          ))}
        </List>
      ) : (
        <List>
          {navItems2.map((item, index) => (
            <a key={index} href={item.link}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </a>
          ))}
        </List>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className="app-bar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            {isMainMenuVisible || isNucleosPageVisible || isPolosPageVisible ? (
              <img id="logoImg" src={logoVirtual} alt="logo" />
            ) : (
              <img id="logoImg" src={logo} alt="logo" />
            )}
          </Typography>
          {isMainMenuVisible || isNucleosPageVisible || isPolosPageVisible ? (
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              className="items"
            >
              {navItems.map((item, i) => (
                <a key={i} target="_blank" href={item.link}>
                  <Button sx={{ color: "#fff" }} className="item">
                    {item.name}
                  </Button>
                </a>
              ))}
            </Box>
          ) : (
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              className="items"
            >
              {navItems2.map((item, i) => (
                <a key={i} target="_blank" href={item.link}>
                  <Button sx={{ color: "#fff" }} className="item">
                    {item.name}
                  </Button>
                </a>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
