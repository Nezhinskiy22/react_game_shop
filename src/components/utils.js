export const calcTotalPrice = (items) =>
  items.reduce((acc, game) => (acc += Math.ceil(game.price * 0.37)), 0);
