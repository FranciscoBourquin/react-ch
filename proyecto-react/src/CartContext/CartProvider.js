import { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({children}) => {
    //Variabñe para el carrito
    const [cart, setCart]  = useState([])

    //Agregar al carrito
    const addToCart = () => {}

    //Manejar las unidades que se piden
    const [quantity, setQuantity] = useState(0)

    //Quitar del carrito
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id))

    //Vaciar carrito
    const clearCart = () => {
      setCart([])
    }

  return (
    <div>
            <CartContext.Provider
            value={{cart, setCart, quantity, setQuantity, addToCart, removeFromCart, clearCart}}>
                {children}
            </CartContext.Provider>
    </div>
  )
}
