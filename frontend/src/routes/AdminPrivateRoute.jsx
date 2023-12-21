import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHeader from "../components/partials/AdminHeader";
import BottomMenu from "../components/partials/BottomMenu";

export const AdminPrivateRoute = ({children, ...props}) => {
  return (
		<>
			<AdminHeader />
			{children}
		</>
  )
}