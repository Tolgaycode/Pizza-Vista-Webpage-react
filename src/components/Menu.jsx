import React from "react";
import '../styles/Menu.css'
import { Data } from "../heplers/Data.js";
import MenuItem from "./MenuItem.jsx";
import orderbg from '../assets/orderbg.jpg'

const Menu = () => {
  return (
    <div className="menu" style={{ backgroundImage: `url(${orderbg})` }}> 
    <h1 className="menuTitle">MENU</h1>

    <div className="menuItem animate__animated animate__fadeInLeft">
      {Data.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          image={item.image}
          price={item.price}
          content={item.content}
        />
      ))}
    </div>
    </div>
  );
};

export default Menu;