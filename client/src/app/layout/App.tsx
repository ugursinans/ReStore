import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Grid, createTheme } from "@mui/material";
import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import AboutPage from "../../features/about/about";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/contact";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteMode = darkMode ? "dark" : "light";
  const backgroundColor = darkMode ? "#121212" : "#eeeeee";
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: backgroundColor,
      },
    },
  });

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header checked={darkMode} handleDarkMode={handleDarkMode} />
      <Grid container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
