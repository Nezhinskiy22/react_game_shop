import React from "react";
import Button from "./button/Button";
import "./GameBuy.css";

const Gamebuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">
        {Math.ceil(game.price * 0.37)} uah
      </span>
      <Button onClick={() => null} type="primary">
        До кошика
      </Button>
    </div>
  );
};

export default Gamebuy;
