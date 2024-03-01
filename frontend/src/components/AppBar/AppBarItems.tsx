import * as React from "react";
import { useNavigate } from "react-router-dom";

// import PersonIcon from '@mui/icons-material/Person'
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";

// import { darkTheme, lightTheme } from "../../lib/theme";

export default function AppBarItems() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const handleLogoutClick = () => {};

  const theme = true;

  return (
    <ThemeProvider theme={theme}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => navigate("/app")}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <HomeIcon />
            <Typography>Home</Typography>
          </Stack>
        </MenuItem>

        <MenuItem onClick={() => navigate("/app/blog")}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <CollectionsBookmarkIcon />
            <Typography>Blog</Typography>
          </Stack>
        </MenuItem>
      </Menu>

      <IconButton onClick={(e) => handleClick(e)} color="inherit">
        <Badge color="secondary">
          <MenuIcon color="inherit" />
        </Badge>
      </IconButton>
    </ThemeProvider>
  );
}
