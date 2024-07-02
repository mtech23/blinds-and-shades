import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import About from "../screens/About";
import Login from "../screens/Login";

const Router = () => {
  return (
    <BrowserRouter basename="blinds-and-shades">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
