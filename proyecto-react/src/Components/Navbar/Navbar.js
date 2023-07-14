export const Navbar = ( {children}) => {
  return (

    <ul className="navbar">
  <li><a href="/">Inicio</a></li>
  <li><a href="/">Productos</a></li>
  <li><a href="/">{children}</a></li>
</ul>

  )
}

