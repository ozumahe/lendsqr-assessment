import React from "react";
import { Briefcase, Logo } from "../../../svgIcons";
import "../../../styles/sidebar.scss";
const SideBar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div>
        <div className="sidebar__nav">
          <Briefcase />
          <p className="sidebar__nav__text">Switch Organization</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
