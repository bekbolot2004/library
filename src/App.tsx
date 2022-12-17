import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./Pages/Home";
import PersonalArea from "./Pages/PersonalArea";


const theme = createTheme({
  palette: {
    secondary: {
      main: '#FF7F2C',
      contrastText: "#fff" 
      
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalarea" element={<PersonalArea />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
