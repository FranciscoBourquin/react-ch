import React from 'react'

export const Navbar = ( {children}) => {
  return (
    <ul className="navbar">
        <li>Inicio</li>
        <li>Productos</li>
        <li> {children}</li>
    </ul>
  )
}
