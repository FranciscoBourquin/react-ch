import { useState } from "react";
import { CartContext } from '../CartContext/CartContext'

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
});


const addToCart = (item) => {
    const existingItem = cart.items.find(item2 => item2.id === item.id);

    if (existingItem) {
      const updatedItems = cart.items.map(item => {
        if (item.id === existingItem.id) {
          return { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price };
        }
        return item;
      });

      setCart(prev => ({
        ...prev,
        items: updatedItems,
        total: prev.total + item.price,
      }));
    } else {
      setCart(prev => ({
        ...prev,
        items: [...prev.items, { ...item, quantity: 1, total: item.price }],
        total: prev.total + item.price,
      }));
    }
  };


  const removeFromCart = (id) => {
    const removedItem = cart.items.find(item => item.id === id);
    const updatedItems = cart.items.filter(item => item.id !== id);
    setCart(prev => ({
      ...prev,
      items: updatedItems,
      total: prev.total - removedItem.total,
    }));
  };


  const incrementQuantity = (id) => {
    const updatedCart = cart.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          total: (item.quantity + 1) * item.price,
        };
      }
      return item;
    });

    setCart(prev => ({
      ...prev,
      items: updatedCart,
      total: prev.total + cart.items.find(item => item.id === id).price,
    }));
  };

  const decrementQuantity = (id) => {
    const updatedCart = cart.items
      .map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(item.quantity - 1, 0);
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.price,
          };
        }
        return item;
      })
      .filter(item => item.quantity > 0); // Filtra los productos con cantidad mayor a 0.

    setCart(prev => ({
      ...prev,
      items: updatedCart,
      total: prev.total - cart.items.find(item => item.id === id).price,
    }));
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
