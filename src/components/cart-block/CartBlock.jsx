import React from "react";
import "./CartBlock.css";
import { BiCartAlt } from "react-icons/bi";

const Cartblock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-bloc__icon" />
      <span className="cart-block__total-price">123 грн</span>
    </div>
  );
};

export default Cartblock;
