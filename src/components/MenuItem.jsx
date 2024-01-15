import React from "react";

const MenuItem = ({ name, image, price, content }) => {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{content}</p>
      <span>{price} USD</span>
    </div>
  );
};

export default MenuItem;