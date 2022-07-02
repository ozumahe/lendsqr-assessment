import React from "react";
import { BackIcon } from "../svgIcons";

import "../styles/userdetails.scss";
import { Link } from "react-router-dom";
import Ratings from "react-ratings";

const UserDetails = () => {
  return (
    <div className="userdetails">
      <Link to="/users">
        <div className="back">
          <BackIcon />
          <p>Back to Users</p>
        </div>
      </Link>
      <div className="header_container">
        <p className="header">User Details</p>
        <div className="buttons">
          <button className="button1">Blacklist User</button>
          <button className="button2">Activate User</button>
        </div>
      </div>

      <div className="profile_container">
        <div className="profile">
          <img
            src="https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?b=1&k=20&m=1311084168&s=170667a&w=0&h=mE8BgXPgcHO1UjSmdWYa21NIKDzJvMrjOffy39Ritpo="
            alt=""
          />
          <div className="profile1">
            <p className="name">Grace Effiom</p>
            <p className="id">LSQFf587g90</p>
          </div>
          <div className="line" />
          <div className="profile2">
            <p className="userstier">User’s Tier</p>
            {/* <div>
              <Ratings defaultRating={1} totalRating={3}  />
            </div> */}
          </div>
          <div className="line" />
          <div className="profile3">
            <p className="name">₦200,000.00</p>
            <p className="id">9912345678/Providus Bank</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
