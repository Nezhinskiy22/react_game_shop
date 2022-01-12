import React, { useState } from "react";
import "./CartBlock.css";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";
import CartMenu from "../cart-menu/CartMenu";
import ItemsInCart from "../items-in-cart/ItemsInCart";

const Cartblock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-bloc__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} грн</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default Cartblock;
