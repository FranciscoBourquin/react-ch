import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { HomepageProducts } from '../HomepageProducts/HomepageProducts';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { NotFound } from '../NotFound/NotFound';
import { Navbar } from '../Navbar/Navbar';
import { ItemList } from '../ItemList/ItemList';
import { mensClothes, womensClothes, tech } from '../Products/Products';
import { Button } from '../Button/Button';
import { Cart } from '../Cart/Cart';

const DynamicCategories = () => {
  const { category } = useParams();

  let products = [];

  switch (category) {
    case 'Tech':
      products = tech;
      break;
    case 'MensClothes':
      products = mensClothes;
      break;
    case 'WomensClothes':
      products = womensClothes;
      break;
    default:
      return null;
  }

  // Comparación para determinar el contenido del h2
  let categoryHeader;
  if (category === 'MensClothes') {
    categoryHeader = 'Ropa Masculina';
  } else if (category === 'WomensClothes') {
    categoryHeader = 'Ropa Femenina';
  } else if (category === 'Tech') {
    categoryHeader = 'Tecnología';
  } else {
    // Si no coincide con ninguna categoría válida:
    categoryHeader = 'Categoría no encontrada';
  }

  return (
    <div>
      <h2>{categoryHeader}</h2>
      <ItemList>
        {products.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <Link to={`/${category}/${item.id}`}>
              <Button texto="Ver detalles" />
            </Link>
          </div>
        ))}
      </ItemList>
    </div>
  );
};

export const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<HomepageProducts />} />

        {/* Ruta para las categorías */}
        <Route path="/:category/" element={<DynamicCategories />} />

        {/* Ruta para los detalles del producto */}
        <Route path="/:category/:id" element={<ItemDetailContainer />} />

        <Route path="/Cart" element={<Cart />} />

        {/* Página Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
