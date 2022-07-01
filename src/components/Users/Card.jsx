import React from "react";

const Card = ({ Icon, title, total }) => {
  return (
    <div className="card">
      <Icon />
      <p className="title">{title}</p>
      <p className="total">{total}</p>
    </div>
  );
};

export default Card;
