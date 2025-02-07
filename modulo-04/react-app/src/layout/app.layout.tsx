import React, { PropsWithChildren, useContext } from "react";
import { useTheme } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import { ProfileContext } from "@/core";
import { useSessionStorage } from "@/core/hooks";
import { useNavigate } from "react-router-dom";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMenuOpen = Boolean(anchorEl);

  const { username, setProfile } = useContext(ProfileContext);
  const { removeSessionItem } = useSessionStorage("session");

  const navigate = useNavigate();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setProfile("");
    removeSessionItem();
    navigate("/login");
  };

  const menuId = "test-menu-id";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ pointerEvents: "none" }}>{username}</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className="layout-app-container">
      <AppBar position="fixed">
        <Toolbar sx={{ alignItems: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "block" }}
          >
            Lemoncode React Delivery
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label={ `account of ${username}` }
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.dark,
                  color: theme.palette.secondary.dark,
                }}
              >
                A
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Box sx={{ paddingTop: `${theme.mixins.toolbar.minHeight}px` }}>
        {children}
      </Box>
    </div>
  );
};
