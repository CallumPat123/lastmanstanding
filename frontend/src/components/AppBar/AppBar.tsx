import { useNavigate } from "react-router-dom";

import { Stack } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, styled } from "@mui/material/styles";

import { darkTheme, lightTheme } from "../../lib/theme";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBarComponent = ({ title }: { title?: string }) => {
  // const navigate = useNavigate();
  const darkModeEnabled = true;

  return (
    <ThemeProvider theme={darkModeEnabled ? darkTheme : lightTheme}>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          {!title && (
            <Box sx={{ flexGrow: 1 }}>
              {/* keep box for right-aligning the burger icon */}
            </Box>
          )}

          {title && (
            <Typography
              component="h1"
              variant="h6"
              color={"text.primary"}
              noWrap
              sx={{ flexGrow: 1 }}
              style={{ cursor: "pointer" }}
              // onClick={() => navigate("/app")}
            >
              {title}
            </Typography>
          )}

          <Stack direction="row" spacing={2} alignItems="center">
            {/* <AppBarItems /> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarComponent;
