import { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = (children) => {
    //Variabñe para el carrito
    const [cart, setCart]  = useState([])
    //Manejar las unidades que se piden
    const [quantity, setQuantity] = useState(0)



  return (
    <div>
            <CartContext>
                {children}
            </CartContext>
    </div>
  )
}
