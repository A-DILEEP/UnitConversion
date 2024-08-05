import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Temperature, Currency } from "./Components/Pages/index";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Temperature" element={<Temperature />}></Route>
        <Route path="Currency" element={<Currency />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
