import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import Button from "../button/Button";
import "./GameBuy.css";

const Gamebuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">
        {Math.ceil(game.price * 0.37)} uah
      </span>
      <Button
        onClick={handleClick}
        type={isItemInCart ? "secondary" : "primary"}
      >
        {isItemInCart ? "Забрати з кошика" : "До кошика"}
      </Button>
    </div>
  );
};

export default Gamebuy;
