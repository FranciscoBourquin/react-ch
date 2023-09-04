import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { CartContext } from '../../CartContext/CartContext';

export const Cartwidget = () => {
  const { cart } = useContext(CartContext);
  const itemsWithQuantityGreaterThanOne = cart.items.filter(item => item.quantity > 1);
const totalItemsInCart = cart.items.length;

const result = itemsWithQuantityGreaterThanOne.length + totalItemsInCart;

  // const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <span>
      <BsCart4 /> {result}
    </span>
  );
};

