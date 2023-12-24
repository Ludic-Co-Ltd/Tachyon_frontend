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
import ShowEvent from "../pages/event/ShowEvent";
import ShowCaseStudy from "../pages/case_study/ShowCaseStudy";
import CaseStudyHistories from "../pages/case_study/CaseStudyHistories";
import ShowCompany from "../pages/company/ShowCompany";
import ShowMenter from "../pages/menter/ShowMenter";
import EntrySheetCorrection from "../pages/entry_sheet/EntrySheetCorrection";
import CaseStudyCorrection from "../pages/case_study/CaseStudyCorrection";
import Purchase from "../pages/tickets/Purchase";

import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminLogin from "../pages/auth/AdminLogin";
import Mentees from "../pages/mentee/Mentees";
import EditMentee from "../pages/mentee/EditMentee";
import RegisterMentee from "../pages/mentee/RegisterMentee";
import Menters from "../pages/menter/Menters";
import EditMenter from "../pages/menter/EditMenter";
import RegisterMenter from "../pages/menter/RegisterMenter";
import Events from "../pages/event/Events";
import EntrySheets from "../pages/entry_sheet/EntrySheets";
import CaseStudies from "../pages/case_study/CaseStudies";

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
          path={Paths.showEvent}
          element={
            <PrivateRoute path={Paths.showEvent}>
              <ShowEvent />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.showCaseStudy}
          element={
            <PrivateRoute path={Paths.showCaseStudy}>
              <ShowCaseStudy />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.showCompany}
          element={
            <PrivateRoute path={Paths.showCompany}>
              <ShowCompany />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.showMenter}
          element={
            <PrivateRoute path={Paths.showMenter}>
              <ShowMenter />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.caseStudyHistory}
          element={
            <PrivateRoute path={Paths.caseStudyHistory}>
              <CaseStudyHistories />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.entrySheetCorrection}
          element={
            <PrivateRoute path={Paths.entrySheetCorrection}>
              <EntrySheetCorrection />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.caseStudyCorrection}
          element={
            <PrivateRoute path={Paths.caseStudyCorrection}>
              <CaseStudyCorrection />
            </PrivateRoute>
          }
        />
        <Route
          path={Paths.ticketPurchase}
          element={
            <PrivateRoute path={Paths.ticketPurchase}>
              <Purchase />
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
        <Route
          path={Paths.adminEditMentee}
          element={
            <AdminPrivateRoute path={Paths.adminEditMentee}>
              <EditMentee />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminRegisterMentee}
          element={
            <AdminPrivateRoute path={Paths.adminRegisterMentee}>
              <RegisterMentee />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminEditMenter}
          element={
            <AdminPrivateRoute path={Paths.adminEditMenter}>
              <EditMenter />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminRegisterMenter}
          element={
            <AdminPrivateRoute path={Paths.adminRegisterMenter}>
              <RegisterMenter />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminEvents}
          element={
            <AdminPrivateRoute path={Paths.adminEvents}>
              <Events />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminCaseStudies}
          element={
            <AdminPrivateRoute path={Paths.adminCaseStudies}>
              <CaseStudies />
            </AdminPrivateRoute>
          }
        />
        <Route
          path={Paths.adminEntrySheets}
          element={
            <AdminPrivateRoute path={Paths.adminEntrySheets}>
              <EntrySheets />
            </AdminPrivateRoute>
          }
        />
        <Route path={Paths.adminLogin} element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}