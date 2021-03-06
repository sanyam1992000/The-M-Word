import React from "react";
import Footer from "../footer/Footer";
import MenuList from "../navbar/MenuList";
import NavBar from "../navbar/NavBar";

function Base({ children }) {
  return (
    <div>
      <NavBar>
        <MenuList />
      </NavBar>
      {children}
      <Footer />
    </div>
  );
}

export default Base;
