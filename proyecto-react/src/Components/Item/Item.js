import React from 'react'

export const Item = ({ name, description, image, price }) => {
  return (
    <div>
      <p> {name}</p>
      <img src={image} alt={name} />
      <p> {description} </p>
      <p>Precio: {price}</p>
    </div>
  );
};
