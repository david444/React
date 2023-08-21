import { useState } from "react";
import { MenuItem, Toolbar, IconButton, Box } from "@mui/material";
import AppBarMaterial from "@mui/material/AppBar";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";

const AppBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navItems = ["Home", "Selector", ""];

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpenDrawer(true);
  };
  const handleCloseMenu = () => {
    setOpenDrawer(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMaterial>
        <Toolbar>
          <Drawer
            handleToggle={handleCloseMenu}
            isOpen={openDrawer}
            navItems={navItems}
          />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MenuItem onClick={handleOpenMenu}>
              <IconButton size="large" edge="end" aria-label="user info">
                <MenuIcon />
              </IconButton>
            </MenuItem>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" edge="end" aria-label="user info">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarMaterial>
    </Box>
  );
};

export default AppBar;
