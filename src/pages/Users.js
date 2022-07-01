import React from "react";
import { Card, Table } from "../components/Users";
import "../styles/users.scss";
import {
  Users2,
  ActiveUsers,
  UserswithLoans,
  UserswithSavings,
} from "../svgIcons";

const Users = () => {
  return (
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
      </div>
    </div>
  );
};

export default Users;
