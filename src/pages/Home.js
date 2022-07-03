import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";
import "../styles/home.scss";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
  }, []);

  return (
    <div className="home">
      <SpinnerRoundOutlined color="#39CDCC" />
    </div>
  );
};

export default Home;
