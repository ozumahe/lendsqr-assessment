import React, { useState } from "react";
import { TableIcon } from "../../../svgIcons";
import BodyItem from "./BodyItem";

const Table = () => {
  const [filter, setFilter] = useState(false);

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
        <tr style={{ cursor: "pointer" }} onClick={() => setFilter(!filter)}>
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
      {filter && (
        <div className="filter">
          <div className="section">
            <p>Organization</p>
            <select placeholder="Select" name="" id="">
              <option value="Select" selected disabled hidden>
                Select
              </option>
            </select>
          </div>
          <div className="section">
            <p>Username</p>
            <input name="" id="" placeholder="Email" />
          </div>

          <div className="section">
            <p>Date</p>
            <input
              type="date"
              // style={{ display: "none" }}
              name=""
              id="date"
              placeholder="Date"
            />
          </div>
          <div className="section">
            <p>Phone Number</p>
            <input name="" id="" placeholder="Phone Number" />
          </div>
          <div className="section">
            <p>Status</p>
            <select placeholder="Select" name="" id="">
              <option value="Select" selected disabled hidden>
                Select
              </option>
            </select>

            <div className="buttons">
              <button className="button1">Reset</button>
              <button className="button2">Filter</button>
            </div>
          </div>
        </div>
      )}
    </table>
  );
};

export default Table;
