import { useState } from "react";
import { CartContext } from '../CartContext/CartContext'

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (item) => {
      setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
      const updatedCart = cart.map(item => {
          if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
          }
          return item;
      });
      setCart(updatedCart);
  };

  const decrementQuantity = (id) => {
      const updatedCart = cart.map(item => {
          if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
          }
          return item;
      }).filter(item => item.quantity > 0);
      setCart(updatedCart);
  };

  const clearCart = () => {
      setCart([]);
  };

  return (
      <div>
          <CartContext.Provider
              value={{
                  cart,
                  setCart,
                  quantity,
                  setQuantity,
                  addToCart,
                  removeFromCart,
                  incrementQuantity,
                  decrementQuantity,
                  clearCart
              }}>
              {children}
          </CartContext.Provider>
      </div>
  );
}
