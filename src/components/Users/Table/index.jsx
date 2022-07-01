import React, { useState } from "react";
import { TableIcon } from "../../../svgIcons";
import BodyItem from "./BodyItem";

const Table = () => {
  const tableHeaders = [
    "organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((d, i) => (
            <th key={i}>
              <div>
                <p>{d}</p>
                <TableIcon />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <BodyItem />
      </tbody>
    </table>
  );
};

export default Table;
