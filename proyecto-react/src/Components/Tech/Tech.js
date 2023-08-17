import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../Item/Item';
import  Products  from '../Products/Products.json';
import { Button } from '../Button/Button';

export const Tech = () => {
  return (
    <ItemList>
      {Products.tech.map((item) => (
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



