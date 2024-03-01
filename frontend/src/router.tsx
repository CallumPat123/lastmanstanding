import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./lib/theme";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const AppRoutes = () => {
  const darkModeEnabled = true;
  return (
    <ThemeProvider theme={darkModeEnabled ? darkTheme : lightTheme}>
      <Box
        className="home"
        sx={{ backgroundColor: "background.default" }}
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        <Router>
          <Routes>
            <Route path="app/signin" element={<SignIn />} />
            <Route path="app/signup" element={<SignUp />} />
            <Route path="app/home" element={<Home />} />
            <Route path="app/blog" element={<Blog />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default AppRoutes;
