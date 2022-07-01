import React from "react";
import { Option, TableIcon } from "../../svgIcons";

const Table = () => {
  const tableHeaders = [
    "organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  const data = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Pending",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
  ];

  const userStatusColor = (status) => {
    switch (status) {
      case "inactive":
        return "#545F7D";
      case "pending":
        return "#E9B200";
      case "blacklisted":
        return "#E4033B";
      case "active":
        return "#39CD62";
      default:
        break;
    }
  };
  const userStatusBgColor = (status) => {
    switch (status) {
      case "inactive":
        return "rgba(84, 95, 125, 0.1)";
      case "pending":
        return "rgba(233, 178, 0, 0.1)";
      case "blacklisted":
        return "rgba(228, 3, 59, 0.1)";
      case "active":
        return "rgba(57, 205, 98, 0.1)";
      default:
        break;
    }
  };

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
        {data.map((data, i) => (
          <tr key={i}>
            <td>
              <p>{data.organization}</p>
            </td>
            <td>
              <p>{data.username}</p>
            </td>
            <td>
              <p>{data.email}</p>
            </td>
            <td>
              <p>{data.phoneNumber}</p>
            </td>
            <td>
              <p>{data.dataJoined}</p>
            </td>
            <td>
              <button
                style={{
                  background: userStatusBgColor(
                    data.status.toLocaleLowerCase()
                  ),
                  color: userStatusColor(data.status.toLocaleLowerCase()),
                }}
              >
                {data.status}
              </button>
            </td>
            <td>
              <Option />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
