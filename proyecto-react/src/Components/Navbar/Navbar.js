import { Link } from 'react-router-dom'
import {Logo} from '../Logo/Logo'
import {Cartwidget} from '../Cartwidget/Cartwidget'
export const Navbar = ( ) => {
  return (

    <ul className="navbar">
        <li><Link to="/"><Logo /></Link></li>
        <li><Link to="/Tech">Tecnología</Link></li>
        <li><Link to="/MensClothes">Ropa Masculina</Link></li>
        <li><Link to= '/WomensClothes'>Ropa Femenina</Link></li>
        <li><Link to="/Cart"><Cartwidget/></Link></li>
      </ul>
  )
}
