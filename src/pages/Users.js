import React from "react";
import Layout from "../components/Layout";
import { Card, Table } from "../components/Users";
import "../styles/users.scss";
import {
  Users2,
  ActiveUsers,
  UserswithLoans,
  UserswithSavings,
  Dropdown,
  PrevIcon,
  NextIcon,
  View,
  ActiveUser,
  BlacklistUser,
} from "../svgIcons";

const Users = () => {
  return (
    <Layout>
      <div className="users">
        <p className="header">Users</p>
        <div className="users_container">
          <Card Icon={Users2} title="Users" total="2,453" />
          <Card Icon={ActiveUsers} title="Active Users" total="2,453" />
          <Card Icon={UserswithLoans} title="Users with Loans" total="2,453" />
          <Card
            Icon={UserswithSavings}
            title="Users with Savings"
            total="2,453"
          />
        </div>
        <div className="table">
          <Table />

          <div className="controller">
            <div className="left">
              <p className="showing">Showing</p>
              <div className="select_container">
                <div className="select">
                  <p>100</p>
                  <Dropdown />
                </div>
              </div>
              <p className="showing">out of 100</p>
            </div>
            <div className="right">
              <button>
                <PrevIcon />
              </button>
              <div className="numbers">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>...</p>
                <p>15</p>
                <p>16</p>
              </div>
              <button>
                <NextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
