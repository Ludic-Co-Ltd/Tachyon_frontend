import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Paths } from "../config/Paths";
import Mypage from "../pages/mypage/Mypage";
import Reservation from "../pages/reservation/Reservation";

export const Routing = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={Paths.login} element={<Login />} />
        <Route
          path={Paths.reservation}
          element={
            <PrivateRoute path={Paths.reservation}>
              <Reservation />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.mypage}
          element={
            <PrivateRoute path={Paths.mypage}>
              <Mypage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}