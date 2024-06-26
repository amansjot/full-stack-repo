import * as React from "react";
import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export const App = () => {
  const baseUrl =
    process.env.NODE_ENV === "production" ? "/full-stack-repo/" : "/";

  return (
    <ChakraProvider theme={theme}>
      <Router basename={baseUrl}>
        <Box textAlign="center" fontSize="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
