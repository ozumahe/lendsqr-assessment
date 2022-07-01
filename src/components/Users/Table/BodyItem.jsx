import React, { useState } from "react";
import { ActiveUser, BlacklistUser, Option, View } from "../../../svgIcons";

const BodyItem = () => {
  const [showOption, setShowOption] = useState(false);

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
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dataJoined: "May 15, 2020 10:00 AM",
      status: "Active",
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

  const handleOption = () => {
    setShowOption(!showOption);
  };
  return (
    <>
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
                background: userStatusBgColor(data.status.toLocaleLowerCase()),
                color: userStatusColor(data.status.toLocaleLowerCase()),
              }}
            >
              {data.status}
            </button>
          </td>
          <td>
            <div className="table__options__container">
              <Option />
              <div className="table__options">
                <div className="table__option">
                  <View /> <p>View Details</p>
                </div>
                <div className="table__option">
                  <BlacklistUser /> <p>Blacklist User</p>
                </div>
                <div className="table__option">
                  <ActiveUser /> <p>Activate User</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BodyItem;
