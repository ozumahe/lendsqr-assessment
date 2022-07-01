import React from "react";
import Navbar from "../Navbar";
import SideBar from "../Navbar/SideBar";
import "../../styles/layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
