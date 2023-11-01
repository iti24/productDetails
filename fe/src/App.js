import React from "react";
import ProductList from "./component/ProductList";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme();

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ProductList />
      </ThemeProvider>
    </div>
  );
};

export default App;
