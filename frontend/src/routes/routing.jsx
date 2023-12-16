import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import Header from "../components/partials/Header";
import Mypage from "../pages/mypage/Mypage";

export const Routing = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/mypage"
          element={
            <PrivateRoute path="/mypage">
              <Mypage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}