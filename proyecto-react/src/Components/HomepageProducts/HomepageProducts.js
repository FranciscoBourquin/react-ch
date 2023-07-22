import { useState, useEffect } from 'react';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../Item/Item';
import { tech, mensClothes, womensClothes } from '../Products/Products';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

export const HomepageProducts = () => {
  const [loading, setLoading] = useState(true);
  const [womensClothesSlice, setWomensClothesSlice] = useState([]);
  const [mensClothesSlice, setMensClothesSlice] = useState([]);
  const [techSlice, setTechSlice] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setWomensClothesSlice(womensClothes.slice(0, 2));
      setMensClothesSlice(mensClothes.slice(0, 2));
      setTechSlice(tech.slice(0, 2));
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemListContainer>
          <ItemList>
            {techSlice.map((item) => (
              <div key={item.id}>
                <Item name={item.name} image={item.image} />
                <Link to={`/Tech/${item.id}`}>
                  <Button texto="Ver detalles" />
                </Link>
              </div>
            ))}

            {mensClothesSlice.map((item) => (
              <div key={item.id}>
                <Item name={item.name} image={item.image} />
                <Link to={`/MensClothes/${item.id}`}>
                  <Button texto="Ver detalles" />
                </Link>
              </div>
            ))}

            {womensClothesSlice.map((item) => (
              <div key={item.id}>
                <Item name={item.name} image={item.image} />
                <Link to={`/WomensClothes/${item.id}`}>
                  <Button texto="Ver detalles" />
                </Link>
              </div>
            ))}
          </ItemList>
        </ItemListContainer>
      )}
    </div>
  );
};
