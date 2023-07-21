import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../Item/Item';
import { tech } from '../Products/Products';
import { Button } from '../Button/Button';

export const Tech = () => {
  return (
    <ItemList>
      {tech.map((item) => (
        <div key={item.id}>
          <Item name={item.name} image={item.image} />
          <Link to={`/Tech/${item.id}`}>
            <Button texto="Ver detalles" />
          </Link>
        </div>
      ))}
    </ItemList>
  );
};



