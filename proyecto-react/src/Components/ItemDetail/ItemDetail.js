import { Item } from '../Item/Item';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const ItemDetail = ({ name, image, description, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <h2>Detalles del producto</h2>
      <Item name={name} image={image} description={description} price={price} />
      <Button
      texto= '+'
       onClick= {handleIncrement}/>
      <span> {quantity}</span>
      <Button
      texto= '-'
       onClick= {handleDecrement}/>
    </div>
  );
};











