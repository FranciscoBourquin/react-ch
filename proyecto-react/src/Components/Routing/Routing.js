import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { HomepageProducts } from '../HomepageProducts/HomepageProducts';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { NotFound } from '../NotFound/NotFound';
import { Navbar } from '../Navbar/Navbar';
import { ItemList } from '../ItemList/ItemList';
import { mensClothes, womensClothes, tech } from '../Products/Products';
import { Button } from '../Button/Button';
import { Cart } from '../Cart/Cart';

 export const DynamicCategories = () => {
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

  return (
    <div>
      <h2>{category}</h2>
      <ItemList>
        {products.map((item) => {
          console.log(item)
          return(
          <div key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <Link to={`/${category}/${item.id}`}>
              <Button texto="Ver detalles" />
            </Link>
          </div>
        )})}
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

        <Route
        path='/Cart'
        element = {<Cart/>}
        />

        {/* Página Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};



















