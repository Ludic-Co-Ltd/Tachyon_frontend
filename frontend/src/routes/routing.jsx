import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";

export const Routing = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}