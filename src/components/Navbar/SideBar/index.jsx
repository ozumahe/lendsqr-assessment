import React from "react";
import {
  Briefcase,
  Dropdown,
  Home,
  LoanRequest,
  PiggyBank,
  Sack,
  Savings,
  UserCheck,
  Users,
  UserTimes,
} from "../../../svgIcons";

import "../../../styles/sidebar.scss";
import UserFriends from "../../../svgIcons/UserFriends";
import Hand from "../../../svgIcons/Hand";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar__nav">
          <Briefcase />
          <p className="sidebar__nav__text">Switch Organization</p>
          <Dropdown />
        </div>
        <div className="sidebar__nav__dashboard">
          <Home />
          <p className="sidebar__nav__text">Dashboard</p>
        </div>
        {/* CUSTOMERS */}
        <div className="sidebar__nav__section">
          <p className="header">CUSTOMERS</p>
          <div className="sidebar__nav__section__option active">
            <UserFriends />
            <p className="text activetext">Users</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Users />
            <p className="text activetext">Guarantors</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Sack />
            <p className="text activetext">Users</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Hand />
            <p className="text activetext">Decision Models</p>
          </div>
          <div className="sidebar__nav__section__option">
            <PiggyBank />
            <p className="text activetext">Savings</p>
          </div>
          <div className="sidebar__nav__section__option">
            <LoanRequest />
            <p className="text activetext">Loan Requests</p>
          </div>
          <div className="sidebar__nav__section__option">
            <UserCheck />
            <p className="text activetext">Whitelist</p>
          </div>
          <div className="sidebar__nav__section__option">
            <UserTimes />
            <p className="text activetext">Karma</p>
          </div>
        </div>
        {/* BUSINESSES */}
        <div className="sidebar__nav__section">
          <p className="header">CUSTOMERS</p>
          <div className="sidebar__nav__section__option active">
            <Briefcase />
            <p className="text activetext">Organization</p>
          </div>
          <div className="sidebar__nav__section__option">
            <LoanRequest />
            <p className="text activetext">Loan Products</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Savings />
            <p className="text activetext">Savings Products</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Hand />
            <p className="text activetext">Decision Models</p>
          </div>
          <div className="sidebar__nav__section__option">
            <PiggyBank />
            <p className="text activetext">Savings</p>
          </div>
          <div className="sidebar__nav__section__option">
            <LoanRequest />
            <p className="text activetext">Loan Requests</p>
          </div>
          <div className="sidebar__nav__section__option">
            <UserCheck />
            <p className="text activetext">Whitelist</p>
          </div>
          <div className="sidebar__nav__section__option">
            <UserTimes />
            <p className="text activetext">Karma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
