import React from "react";
import Footer from "../footer/Footer";
import AdminMenuList from "../navbar/AdminMenuList";
import NavBar from "../navbar/NavBar";

function AdminBase({ children }) {
  return (
    <div>
      <NavBar>
        <AdminMenuList />
      </NavBar>
      {children}
      <Footer />
    </div>
  );
}

export default AdminBase;
