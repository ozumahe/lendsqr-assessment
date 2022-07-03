import React, { useState } from "react";
import "../styles/signin.scss";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPaassword, setShowPaassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "testing@gmail.com",
    password: "testing123",
  });

  return (
    <div className="signin">
      <img src="assets/images/logo.png" alt="logo here" />
      <div className="container">
        <div className="image">
          <img src="/assets/images/pablo-sign-in1.png" alt="" />
        </div>
        <div className="form">
          <p className="header">Welcome!</p>
          <p className="sub">Enter details to login.</p>
          <form>
            <div className="input_container">
              <input value={formData.email} type="text" placeholder="Email" />
            </div>
            <div className="input_container">
              <input
                value={formData.password}
                type={showPaassword ? "text" : "password"}
                placeholder="Password"
              />
              <div
                className="button"
                onClick={() => setShowPaassword(!showPaassword)}
              >
                <p>{showPaassword ? "HIDE" : "SHOW"}</p>
              </div>
            </div>
            <p className="for">Forgot PASSWORD?</p>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/users")}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
