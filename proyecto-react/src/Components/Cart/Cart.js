import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);


  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.items.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: {item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};
