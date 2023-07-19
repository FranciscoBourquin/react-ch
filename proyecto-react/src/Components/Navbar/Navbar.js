export const Navbar = ( {children}) => {
  return (

    <ul className="navbar">
      <li><a href="/">Tecnología</a></li>
      <li><a href="/">Ropa Masculina</a></li>
      <li><a href="/">Ropa Femenina</a></li>
      <li><a href="/">{children}</a></li>
    </ul>

  )
}

