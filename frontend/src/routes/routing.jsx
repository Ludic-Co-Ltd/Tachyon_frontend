import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import { AdminPrivateRoute } from "./AdminPrivateRoute";
import { Paths } from "../config/Paths";
import Mypage from "../pages/mypage/Mypage";
import EditProfile from "../pages/mypage/EditProfile";
import Reservation from "../pages/reservation/Reservation";
import Dashboard from "../pages/dashboard/Dashboard";
import Information from "../pages/selection/Information";
import Solution from "../pages/selection/Solution";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminLogin from "../pages/auth/AdminLogin";
import Mentees from "../pages/mentee/Mentees";
import Menters from "../pages/menter/Menters";

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
        <Route
          path={Paths.editProfile}
          element={
            <PrivateRoute path={Paths.editProfile}>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.dashboard}
          element={
            <PrivateRoute path={Paths.dashboard}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.selectionInfo}
          element={
            <PrivateRoute path={Paths.selectionInfo}>
              <Information />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.selectionSolution}
          element={
            <PrivateRoute path={Paths.selectionSolution}>
              <Solution />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.adminDashboard}
          element={
            <AdminPrivateRoute path={Paths.adminDashboard}>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminMentees}
          element={
            <AdminPrivateRoute path={Paths.adminMentees}>
              <Mentees />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminMenters}
          element={
            <AdminPrivateRoute path={Paths.adminMenters}>
              <Menters />
            </AdminPrivateRoute>
          }
        />
        <Route path={Paths.adminLogin} element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}