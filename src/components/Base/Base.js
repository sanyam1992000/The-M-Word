import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

function Base({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Base;
