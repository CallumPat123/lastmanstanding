import AppRoutes from "./router";
import { globalStyles } from "./lib/theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <AppRoutes />
      <CssBaseline />
    </>
  );
}

export default App;
