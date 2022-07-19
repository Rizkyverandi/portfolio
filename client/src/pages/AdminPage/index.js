import React from "react";
import { changeTitle, TransitionLayout } from "../../utils";
import { AdminSection } from "../../components";
import { Outlet } from "react-router-dom";

const Admin = () => {
  changeTitle("Content Management System - Rizky Verandi");
  return (
    <TransitionLayout>
      <AdminSection /> 
    </TransitionLayout>
  );
};

export default Admin;
