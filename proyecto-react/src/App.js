import './App.css';
import { Carrito } from './Componentes/Carrito/Carrito';
import { ContenedorProductos } from './Componentes/ContenedorProductos/ContenedorProductos';
import { Navbar } from './Componentes/Nabvar/Navbar';

function App() {
  return (
    <div className="contenedor">
        <Navbar>
            <Carrito />
        </Navbar>
        <ContenedorProductos
          greeting = '¡Bienvenidos!'

          />
    </div>
  );
}

export default App;
