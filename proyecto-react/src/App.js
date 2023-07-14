import './App.css';
import { Navbar } from './Componentes/Nabvar/Navbar';
import { Cartwidget } from './Components/Cartwidget/Cartwidget';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="contenedor">
        <Navbar>
            <Cartwidget />
        </Navbar>
        <ItemListContainer
          greeting = '¡Bienvenidos!'

          />
    </div>
  );
}

export default App;
