import  { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { Item } from '../Item/Item';
import { Button } from '../Button/Button';

export const ItemDetail = ({ id, name, image, description, price }) => {
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const itemInCart = cart.find(item => item.id === id);
  const localQuantity = itemInCart ? itemInCart.quantity : 0;

  const handleIncrement = () => {
    const item = { id, name, image, description, price, quantity: 1 };
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      incrementQuantity(id);
    } else {
      addToCart(item);
    }
  };

  const handleDecrement = () => {
    decrementQuantity(id);
  };

  return (
    <div>
      <h2>Detalles del producto</h2>
      <Item name={name} image={image} description={description} price={price} />
      <Button texto='+' onClick={handleIncrement} />
      <span>{localQuantity}</span>
      <Button texto='-' onClick={handleDecrement} />
    </div>
  );
};
