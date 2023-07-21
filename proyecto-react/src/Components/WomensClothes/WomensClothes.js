import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../Item/Item';
import { womensClothes } from '../Products/Products';
import { Button } from '../Button/Button';

export const WomensClothes = () => {
  return (
    <ItemList>
      {womensClothes.map((item) => (
        <div key={item.id}>
          <Item name={item.name} image={item.image} />
          <Link to={`/WomensClothes/${item.id}`}>
            <Button texto="Ver detalles" />
          </Link>
        </div>
      ))}
    </ItemList>
  );
};


