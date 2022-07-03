import React, { useEffect, useState } from "react";
import {
  ActiveUser,
  BlacklistUser,
  Dropdown,
  NextIcon,
  Option,
  PrevIcon,
  TableIcon,
  View,
} from "../../../svgIcons";
import usersData from "../../../data/MOCK_DATA.json";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Table = () => {
  const [filter, setFilter] = useState(false);
  const navigate = useNavigate();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(usersData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(usersData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % usersData.length;

    setItemOffset(newOffset);
  };

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

  const tableHeaders = [
    "organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  return (
    <>
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
          {/* <BodyItem /> */}
          {currentItems.map((data, i) => (
            <tr key={i}>
              <td>
                <p>
                  {data.company_name.length > 7
                    ? data.company_name.substring(0, 7)
                    : data.company_name}
                </p>
              </td>
              <td>
                <p>{data.username}</p>
              </td>
              <td>
                <p>{data.email}</p>
              </td>
              <td>
                <p>{data.phone_number}</p>
              </td>
              <td>
                <p>{data.date_joined}</p>
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
                <div className="table__options__container">
                  <Option />
                  <div className="table__options">
                    <div
                      className="table__option"
                      onClick={() => navigate(`/user/${data.id}/details`)}
                    >
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
      <div className="controller">
        <div className="left">
          <p className="showing">Showing</p>
          <div className="select_container">
            <div className="select">
              <p>{itemsPerPage}</p>
              <Dropdown />
            </div>
          </div>
          <p className="showing">out of {usersData.length}</p>
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel={<NextIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<PrevIcon />}
          renderOnZeroPageCount={null}
          containerClassName="right"
          previousClassName="button"
          nextClassName="button"
          pageClassName="numbers"
          activeClassName="active"
          activeLinkClassName="active"
        />
      </div>
    </>
  );
};

export default Table;
